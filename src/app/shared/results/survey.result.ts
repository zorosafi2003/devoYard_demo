import { SurveyLanguge } from "app/model/SurveyInfo";
import { ErrorResult } from "./base.result";

export interface SaveAnswersSurveyResult {
    isSuccess: boolean;
    errors: ErrorResult[];
    code: string;
    message: string;
    languageTypeId: number;
    returnUrl: string;
}


export interface GetApplicantSurveyAnswersResult {
    lastPageIndex: number;
    answersInfo: AnswerChildOfGetApplicantSurveyAnswersResult[]
}

export interface AnswerChildOfGetApplicantSurveyAnswersResult {
    parentQuestionId: number;
    questionId: number;
    questionType: number;
    answerId: number;
    answerText?: any;
    answerIdArr?: any;
    answerLevelId?: any;
}

export interface GetSurveyOtpOptionsResult {
    url: string;
    options: OptionChildOfGetSurveyOtpOptionsResult[];
}

export interface OptionChildOfGetSurveyOtpOptionsResult {
    opptionId: number;
    opptionName: string;
}

export interface GetOriginalUrlResult {
    shortenedUrl: ShortenedUrlChildOfGetOriginalUrlResult;
}
export interface ShortenedUrlChildOfGetOriginalUrlResult {
    isPre: boolean;
    shortSurveyCode: string;
    shortApplicantCode: string;
}

export interface GetSurveySendApplicationKeyOptionsResult {
    url: string;
    options: OptionChildOfGetSurveySendApplicationKeyOptionsResult[];
}

export interface OptionChildOfGetSurveySendApplicationKeyOptionsResult {
    opptionId: number;
    opptionName: string;
}


export interface GetSurveyLanguagesResult{
    arabicTitle:string;
    englishTitle:string;
    languages:SurveyLanguge[];
}

export interface VerifyApplicantKeyResult{
    isSuccess:boolean;
    errors:ErrorResult[];
}
