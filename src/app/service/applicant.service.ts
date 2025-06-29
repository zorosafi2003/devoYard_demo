import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ApplicantDataTabInfo } from '../model/ApplicantDataTabInfo';
import { SendApplicantCodeModel } from '../model/send-applicant-code.model';
import { BaseResult } from '../shared/results/base.result';
import { SetApplicantDataTabInfoModel } from '../model/set-applicant-data-tab-info.model';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private url = environment.baseUrl + '/api/v1/Applicants';

  constructor(private _httpClient: HttpClient) { }

  sendApplicantCode(model: SendApplicantCodeModel): Observable<BaseResult> {
    return this._httpClient.post<BaseResult>(this.url + '/SendApplicantCode', model
      , { headers: new HttpHeaders({ 'disable-error-alert': 'true' }) });
  }

  sendOtpToApplicant(OtpToApplicant: {
    optionId: number,
    applicantKey: string,
    surveyKey: string,
    isPre: boolean
  }): Observable<any> {
    return this._httpClient.post<any>(this.url + '/SendOtpToApplicant', OtpToApplicant);
  }

  verifyApplicantOtp(OtpVerify: {
    code: string,
    applicantKey: string,
    surveyKey: string,
    isPre: boolean
  }): Observable<any> {
    return this._httpClient.post<any>(this.url + '/VerifyApplicantOtp', OtpVerify);
  }

  getApplicantDataTabInfo(filter: { langId: any, applicantKey: any, surveyKey: any, isPre: boolean }): Observable<ApplicantDataTabInfo> {
    var queryString = $.param(filter);
    return this._httpClient.get<ApplicantDataTabInfo>(this.url + `/GetApplicantDataTabInfo?${queryString}`);
  }

  setApplicantDataTabInfo(model: SetApplicantDataTabInfoModel): Observable<any> {
    return this._httpClient.post<any>(this.url + '/SetApplicantDataTabInfo', model);
  }
}
