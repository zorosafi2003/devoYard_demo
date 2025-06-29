import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { SurveyInfo } from '../model/SurveyInfo';
declare var $ :any;

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };







  SetApplicantDataTabInfo(SurveyInfo: any): Observable<any> {
    return this.http
      .post<any>(
        this.baseUrl + '/api/v1/Applicants/SetApplicantDataTabInfo',
        SurveyInfo,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  submitSurvey(SurveyAnswar: any): Observable<any> {
    return this.http
      .post<any>(
        this.baseUrl + '/api/v1/Survey/SubmitSurvey',
        SurveyAnswar,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  StartNewSurvey(key: any) {
    const url = `${this.baseUrl}/api/v1/Survey/StartNewSurvey?key=${key}`;
    return this.http.post(url, null).pipe(retry(1), catchError(this.handleError));
  }

  GetSurveyAsJSON(data: any) {
    const url = `${this.baseUrl}/api/v1/Survey/GetSurveyAsJSON`;
    return this.http.post(url, data).pipe(retry(1), catchError(this.handleError));
  }


  SubmitSurvey(data: any) {

    const url = `${this.baseUrl}/api/v1/Survey/SubmitSurvey`;
  }


  //   // HttpClient API get() method => Fetch employee
  //   getEmployee(id: any): Observable<Employee> {
  //     return this.http
  //       .get<Employee>(this.apiURL + '/employees/' + id)
  //       .pipe(retry(1), catchError(this.handleError));
  //   }


  //   createEmployee(employee: any): Observable<Employee> {
  //     return this.http
  //       .post<Employee>(
  //         this.apiURL + '/employees',
  //         JSON.stringify(employee),
  //         this.httpOptions
  //       )
  //       .pipe(retry(1), catchError(this.handleError));
  //   }



  //   updateEmployee(id: any, employee: any): Observable<Employee> {
  //     return this.http
  //       .put<Employee>(
  //         this.apiURL + '/employees/' + id,
  //         JSON.stringify(employee),
  //         this.httpOptions
  //       )
  //       .pipe(retry(1), catchError(this.handleError));
  //   }


  //   deleteEmployee(id: any) {
  //     return this.http
  //       .delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  //       .pipe(retry(1), catchError(this.handleError));
  //   }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    console.log(errorMessage)
    return throwError(() => {
      return errorMessage;
    });
  }
}