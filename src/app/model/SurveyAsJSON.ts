export interface getSurveyAsJSON {
  surveyId: number
  surveyKey: string
  isTheLandingPageMandatory: boolean
  landingSurveyDetails: LandingSurveyDetails
  surveyTitle: string
  applicantKey: string
  applicantKeyTitle: string
  surveyPages: SurveyPage[]
  introductionPage: IntroductionPage
  finishPage: FinishPage
  instructionPage: InstructionPage
  surveyRules: SurveyRule[]
  appearanceStyle: AppearanceStyle
  navigation: Navigation
  isSuccess: boolean
  errors: Error[]
  code: string
  message: string
  languageTypeId: number
  returnUrl: string
}

export interface LandingSurveyDetails {
  landingPageTemplateId: number
  landingPageTemplateName: string
  surveyId: number
  isTheLandingPageMandatory: boolean
  id: number
}

export interface SurveyPage {
  pageId: number
  pageTypeId: number
  pageTitle: string
  pageDescription: string
  isAllHidden: boolean
  surveyQuestionGroups: SurveyQuestionGroup[]
}

export interface SurveyQuestionGroup {
  questionGroupId: number
  questionGroupName: string
  questionGroupDescription: string
  surveyQuestions: SurveyQuestion[]
}

export interface SurveyQuestion {
  questionId: number
  questionTypeId: number
  questionName: string
  questionTitle: string
  questionDescription: string
  isRequired: boolean
  isVisable: boolean
  isEditable: boolean
  isOTPOption: boolean
  isReadOnly: boolean
  isPreDefine: boolean
  isAdvanceTextArea: boolean
  surveyAnswers: SurveyAnswer[]
  surveySubQuestions: SurveySubQuestion[]
}

export interface SurveyAnswer {
  answerId: number
  score: number
  inputMax: number
  inputMin: number
  isSelected: boolean
  isAddByPreDefine: boolean
  selectedAnswer: string
  answerTitle: string
  answerName: string
  questionTitle: string
  regex: string
  answerDescription: string
  placeHolder: string
  inputTypeId: number
}

export interface SurveySubQuestion {
  questionId: number
  questionTypeId: number
  questionTitle: string
  questionName: string
  isVisable: boolean
  isReadOnly: boolean
  questionDescription: string
}

export interface IntroductionPage {
  pageContentValue: string
}

export interface FinishPage {
  pageContentValue: string
}

export interface InstructionPage {
  pageContentValue: string
}

export interface SurveyRule {
  ruleId: number
  expression: string
  isComplete: boolean
  ruleExps: RuleExp[]
  ruleResultQuestions: RuleResultQuestion[]
  logicActionId: number
}

export interface RuleExp {
  ruleExpId: number
  questionId: number
  logicPropertyId: number
  questionTitle: string
  questionTypeId: number
  opporator: number
  isComplete: boolean
  ruleExpAnswers: RuleExpAnswer[]
}

export interface RuleExpAnswer {
  answerId: number
  answerTitle: string
  textAnswer: string
}

export interface RuleResultQuestion {
  questionId: number
  questionTitle: string
}

export interface AppearanceStyle {
  name: string
  previousButtonBgColor: string
  nextButtonTextColor: string
  nextButtonBgColor: string
  completeButtonTextColor: string
  completeButtonBgColor: string
  previousButtonTextColor: string
  previewButtonTextColor: string
  previewButtonBgColor: string
  editAnswerButtonTextColor: string
  editAnswerButtonBgColor: string
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  infoColor: string
  successColor: string
  errorColor: string
  dangerColor: string
  warningColor: string
  textColor: string
  logo: string
  logoFileName: string
  iconFileUrl: string
  id: number
}

export interface Navigation {
  name: string
  previousPageButtonText: string
  nextPageButtonText: string
  completeButtonText: string
  previewAnswersButtonText: string
  editAnswerButtonText: string
  showPreviousPageButton: boolean
  firstPageIsStartPage: boolean
  proceedNextPageAutomatically: boolean
  previewAnswersTypeId: number
  navigationButtonlocationId: number
  progressBarTypeId: number
  progressBarLocationId: number
  id: number
}

export interface Error {
  code: number
  description: string
  descriptionAr: string
  isoCode: string
}
