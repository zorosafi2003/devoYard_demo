export interface SubmitSurvey {
  surveyId: number
  isSubmit: boolean
  surveyKey: string
  applicantKey: string
  answersDic: AnswersDic[]
  isPre:boolean;
}

export interface AnswersDic {
  answerId: number
  questionId: number
  answerValue: string
  answerIdArr: number[]
}
