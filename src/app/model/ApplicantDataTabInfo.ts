

export interface ApplicantDataTabInfo {
  surveyApplicantQuestionsInfo: SurveyApplicantQuestionsInfo[]
  isSuccess: boolean
  errors: Error[]
  code: string
  message: string
  languageTypeId: number
  returnUrl: string
}

export interface SurveyApplicantQuestionsInfo {
  questionId: number
  questionTypeId: number
  applicantKey: string
  questionName: string
  questionTitle: any
  questionDescription: string
  prefAnswer: string
  isRequired: boolean
  isVisable: boolean
  isEditable: boolean
  answersInfo: AnswersInfo[]
}

export interface AnswersInfo {
  answerId: number
  title: string
  placeHolder: string
  inputMax: number
  inputMin: number
  inputTypeId: number
}

export interface Error {
  code: number
  description: string
  descriptionAr: string
  isoCode: string
}



export interface SetApplicantDataTabInfo {
  applicantKey: string
  dataInfoList: DataInfoList[]
}

export interface DataInfoList {
  questionId: number
  prefAnswer: string
}
