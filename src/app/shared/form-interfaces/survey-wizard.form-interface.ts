import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { SurveyWizardStepEnum } from "../enums/survey-wizard-step.enum";

export interface SurveyWizardFormInterface {
    currentStepIndex: FormControl<number>;
    isPre: FormControl<boolean>;
    landingId: FormControl<number>;
    applicationLanguageId: FormControl<number>;
    arabicDisplayName: FormControl<string>;
    englishDisplayName: FormControl<string>;
    isHasIntroductionPage: FormControl<boolean>;
    isHasInstructionPage: FormControl<boolean>;
    isHasFinishPage: FormControl<boolean>;
    isHasApplicantData: FormControl<boolean>;
    isCompleteAfterSubmitEnable: FormControl<boolean>;
    isTwoFactorAuthenticationEnabled: FormControl<boolean>;
    isSkipAskingNationaId: FormControl<any>;
    applicantGroup: FormGroup<ApplicantChildOfSurveyWizardFormInterface>;
    surveyGroup: FormGroup<SurveyChildOfSurveyWizardFormInterface>;
    pageStepArray: FormArray<FormGroup<PageStepChildOfSurveyWizardFormInterface>>;
}

export interface ApplicantChildOfSurveyWizardFormInterface {
    key: FormControl<any>;
    title: FormControl<string>;
    title_eng: FormControl<string>;
    otpIsVerified: FormControl<any>;
}

export interface SurveyChildOfSurveyWizardFormInterface {
    id: FormControl<number>;
    key: FormControl<string>;
}

export interface PageStepChildOfSurveyWizardFormInterface {
    index: FormControl<number>;
    name: FormControl<string>;
    key: FormControl<SurveyWizardStepEnum>;
    title: FormControl<string>;
    title_eng: FormControl<string>;
    enable: FormControl<boolean>;
}