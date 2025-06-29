export interface SuvryContentPages {
    introductionPage: IntroductionPage
    finishPage: FinishPage
    instructionPage: InstructionPage
    isSuccess: boolean
    errors: Error[]
    code: string
    message: string
    languageTypeId: number
    returnUrl: string
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
  
  export interface Error {
    code: number
    description: string
    descriptionAr: string
    isoCode: string
  }
  