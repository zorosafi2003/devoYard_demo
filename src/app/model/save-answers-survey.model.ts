export interface SaveAnswersSurveyModel  {
    SurveyId: number;
    QuestionReachedId: any;
    PageReachedId: number;
    IsPre: boolean;
    SurveyKey: string;
    ApplicantKey: string;
    AnswersDic: AnswersDicChildOfSaveAnswersSurveyModel[];
  }

 export interface AnswersDicChildOfSaveAnswersSurveyModel {
    AnswerId: any;
    QuestionId: number;
    AnswerValue: string;
    QuestionType: number;
    AnswerIdArr: number[];
    AnswerLevelId:any;
  }