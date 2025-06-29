interface SurveyOtpOptions {
  options: Option[];
  isSuccess: boolean;
  errors: Error[];
  code: string;
  message: string;
  languageTypeId: number;
  returnUrl: string;
}

interface Error {
  code: number;
  description: string;
  descriptionAr: string;
  isoCode: string;
}

interface Option {
  opptionId: number;
  opptionName: string;
}

