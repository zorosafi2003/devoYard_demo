export interface SendApplicantCodeModel{
    optionId: number,
    applicantKey: string,
    surveyKey: string,
    isPre: boolean,
    phoneNumber?: string,
    emailAddress?: string
}