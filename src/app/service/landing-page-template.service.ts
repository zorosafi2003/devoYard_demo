import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Theme } from '../model/Theme';
import { Observable } from 'rxjs';
import { landingPage } from '../model/landing';
declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class LandingPageTemplateService {

  private url = environment.baseUrl + '/api/v1/LandingPageTemplates';

  constructor(private _httpClient: HttpClient) { }

  getLandingPageById(id: string)  :Observable<landingPage> {
    return this._httpClient.get<landingPage>(this.url+ `/GetLandingPageById?id=${id}`);
  }

  getTheme(filter:{landingName: string, survyKey: string , lang :any}) :Observable<Theme> {
    var queryString = $.param(filter);
    return this._httpClient.get<Theme>(this.url+ `/GetTheme?${queryString}`);
  }
}
