import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { SaveAnswersSurveyModel } from '../model/save-answers-survey.model';
import { GetApplicantSurveyAnswersResult, GetOriginalUrlResult, GetSurveyLanguagesResult, GetSurveyOtpOptionsResult, GetSurveySendApplicationKeyOptionsResult, SaveAnswersSurveyResult, VerifyApplicantKeyResult } from '../shared/results/survey.result';
import { getSurveyAsJSON } from '../model/SurveyAsJSON';
import { SuvryContentPages } from '../model/SuvryContentPages';
import { SurveyInfo } from '../model/SurveyInfo';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private url = environment.baseUrl + '/api/v1/Survey';

  constructor(private _httpClient: HttpClient) { }

  getSurveySendApplicantKeyOptions(filter: { applicantKey: string, surveyKey: string, isPre: boolean }){
    var queryString = $.param(filter);
    return this._httpClient.get<GetSurveySendApplicationKeyOptionsResult>(this.url + `/GetSurveySendApplicantKeyOptions?${queryString}`);
  }

  getOriginalUrl(filter: { shortedCode: string }): Observable<GetOriginalUrlResult> {
    var queryString = $.param(filter);
    return this._httpClient.get<GetOriginalUrlResult>(this.url + `/GetOriginalUrl?${queryString}`);
  }

  saveAnswersSurvey(model: SaveAnswersSurveyModel): Observable<SaveAnswersSurveyResult> {
    return this._httpClient.post<SaveAnswersSurveyResult>(this.url + '/SaveAnswersSurvey', model);
  }

  getSurveyAsJson(SurveyInfo: { surveyKey:string, applicantKey: string,surveyLangId: number, isPre: boolean,lang:string}): Observable<getSurveyAsJSON> {
    return this._httpClient.post<getSurveyAsJSON>(this.url + '/GetSurveyAsJSON', SurveyInfo);
  }

  getApplicantSurveyAnswers(filter: { applicantKey: string, surveyKey: string, isPre: boolean ,lang:string }): Observable<GetApplicantSurveyAnswersResult> {
    var queryString = $.param(filter);
    return this._httpClient.get<GetApplicantSurveyAnswersResult>(this.url + `/GetApplicantSurveyAnswers?${queryString}`);
  }

  getSuvryContent(filter:{key: string , applicationLanguageId :number ,lang:string}): Observable<SuvryContentPages> {
    var queryString = $.param(filter);
    return this._httpClient.get<SuvryContentPages>(this.url + `/GetSuvryContentPages?${queryString}`);
  }

  getSurveyInfo(filter: { survyKey: any, isPre: boolean ,lang:string}) {
    return this._httpClient.get<SurveyInfo>(this.url + `/GetSurveyInfo?key=${filter.survyKey}&isPre=${filter.isPre}`);
  }

  getSurveyOtpOptions(survyKey: string): Observable<GetSurveyOtpOptionsResult> {
    return this._httpClient.get<GetSurveyOtpOptionsResult>(this.url + `/GetSurveyOtpOptions?key=${survyKey}`);
  }

  getSurveyLanguages(survyKey: string): Observable<GetSurveyLanguagesResult> {
    return this._httpClient.get<GetSurveyLanguagesResult>(this.url + `/GetSurveyLanguages?surveyKey=${survyKey}`);
  }

  verifyApplicantKey(filter: { applicantKey: any, surveyKey: any, isPre: boolean,lang:string }): Observable<VerifyApplicantKeyResult> {
    var queryString = $.param(filter);
    return this._httpClient.get<VerifyApplicantKeyResult>(this.url + `/IsValidApplicantKey?${queryString}`);
  }
}
