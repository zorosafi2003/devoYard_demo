export interface Theme {
    theam: appearanceInfo 
    landingId: number
    surveyId: number
    navigationName: string
    navigation: Navigation
    appearanceStyleName: string
    appearanceStyle: AppearanceStyle
    isSuccess: boolean
    errors: Error[]
    code: string
    message: string
    languageTypeId: number
    returnUrl: string
  }
  export interface appearanceInfo {
    name: string
    navigationId: number
    appearanceStyleId: number
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
  export interface Error {
    code: number
    description: string
    descriptionAr: string
    isoCode: string
  }