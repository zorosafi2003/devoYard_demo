export interface SurveyInfo {
  surveyDetails: SurveyDetails
  landingSurveyDetails: LandingSurveyDetails
  surveyLanguges: SurveyLanguge[]
  isSuccess: boolean
  errors: Error[]
  code: string
  message: string
  languageTypeId: number
  returnUrl: string
}

export interface SurveyDetails {
  key: string
  englishDisplayName: string
  arabicDisplayName: string
  englishDescription: string
  arabicDescription: string
  applicantKeyTitle: string
  urlType: number
  startDate: string
  endDate: string
  minResponses: number
  maxResponses: number
  showTheTitle: boolean
  isTheLandingPageMandatory: boolean
  isTemplate: boolean
  surveyTemplateId: number
  surveyStatusId: number
  surveyStructureId: number
  expectedDurationTime: number
  isHasApplicantData: boolean
  isTwoFactorAuthenticationEnabled: boolean
  centerId: number
  id: number
  isCompleteAfterSubmitEnable:boolean;
}

export interface LandingSurveyDetails {
  landingPageTemplateId: number
  surveyId: number
  isTheLandingPageMandatory: boolean
  id: number
}

export interface SurveyLanguge {
  isActive: boolean
  name: string
  applicationLanguageId: number
  surveyId: number
  id: number
}

export interface Error {
  code: number
  description: string
  descriptionAr: string
  isoCode: string
}
