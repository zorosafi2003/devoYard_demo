import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators'
import { LoadingService } from '../../service/loading.service';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { helperActions } from 'app/core/states/helpers/helper.action';

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private _loading: LoadingService, private _store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('disable-loader') != 'true') {
    this._loading.setLoading(true, request.url);
    }

    return next.handle(request)
      .pipe(map((event: HttpEvent<any>) => {
        if (event as HttpResponse<any>) {

          if (request.headers.get('disable-error-alert') == 'true') {
            return event;
          }

          const requestBody = (event as HttpResponse<any>).body;
          const isSuccess = requestBody?.isSuccess;
          if (isSuccess == false) {
            if (requestBody.errors?.length > 0) {
              const error: { code: number, description: string, descriptionAr: string } = requestBody.errors[0];
              this._store.dispatch(helperActions.showErrorAlert({ description: error?.descriptionAr }));
            }
          }
        }
        return event;
      }), retry(1), catchError((err) => {
        this._loading.setLoading(false, request.url);


        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = err.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
        }
        this._store.dispatch(helperActions.showErrorAlert({ description: errorMessage }));

        return throwError(() => err);
      }), finalize(() => {
        this._loading.setLoading(false, request.url);
      }));
  }
}

