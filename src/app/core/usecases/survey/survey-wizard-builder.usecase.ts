import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { Observable, of } from "rxjs";
import { SurveyWizardFormInterface } from "app/shared/form-interfaces/survey-wizard.form-interface";
import { SurveyWizardStepEnum } from "app/shared/enums/survey-wizard-step.enum";
import { Store } from "@ngrx/store";
import { AppState } from "../../states/app.state";
import { helperActions } from "../../states/helpers/helper.action";

@Injectable({
    providedIn: 'root'
})
export class SurveyWizardBuilderUseCase implements UseCase<SurveyWizardBuilderUseCaseRequest, SurveyWizardBuilderUseCaseResponse> {

    constructor(private _Store: Store<AppState>) { }

    execute(params: SurveyWizardBuilderUseCaseRequest): Observable<SurveyWizardBuilderUseCaseResponse> {

        var response: SurveyWizardBuilderUseCaseResponse = {
            nextStepIndex: 0
        };

        if (params.onFirstLoad == true) {
            response = this.onFirstLoad(params, response);
        }
        else if (params.onNextStep == true) {
            response = this.onNextStep(params, response);
        }

        return of(response);
    }

    public onFirstLoad(params: SurveyWizardBuilderUseCaseRequest, response: SurveyWizardBuilderUseCaseResponse): SurveyWizardBuilderUseCaseResponse {

        const formValue = params.surveyFormValue;
        if (formValue.applicantGroup.key != null) {
            const applicantIndex = formValue.pageStepArray.findIndex(x => x.key == SurveyWizardStepEnum.ApplicantData);
            if (applicantIndex > -1) {
                if (formValue.isTwoFactorAuthenticationEnabled == true && formValue.applicantGroup.otpIsVerified == false) {
                    this._Store.dispatch(helperActions.showNationalIdPopup());
                }
            }
        }
        else {
            if (formValue.isHasApplicantData) {
                this._Store.dispatch(helperActions.showNationalIdPopup());
            }
        }

        return response;
    }

    public onNextStep(params: SurveyWizardBuilderUseCaseRequest, response: SurveyWizardBuilderUseCaseResponse): SurveyWizardBuilderUseCaseResponse {
        const formValue = params.surveyFormValue;

        const currentTabKey = formValue.pageStepArray[formValue.currentStepIndex]?.key;
        if (currentTabKey == SurveyWizardStepEnum.SelectLanguage) {
            response.nextStepIndex = formValue.currentStepIndex;
        }
        else if (currentTabKey == SurveyWizardStepEnum.Survay) {
            response.nextStepIndex = formValue.currentStepIndex;
        }
        else if (currentTabKey == SurveyWizardStepEnum.ApplicantData) {
            response.nextStepIndex = formValue.currentStepIndex;

            if (formValue.applicantGroup.key == null) {
                this._Store.dispatch(helperActions.showNationalIdPopup());
            }
            else {
                if (formValue.isTwoFactorAuthenticationEnabled == true && formValue.applicantGroup.otpIsVerified == false) {
                    this._Store.dispatch(helperActions.showOtpOptionsPopup());
                } else {
                    response.nextStepIndex = formValue.currentStepIndex + 1;
                }
            }
        }
        else {
            response.nextStepIndex = formValue.currentStepIndex + 1;
        }

        return response;
    }

}

export interface SurveyWizardBuilderUseCaseResponse {
    nextStepIndex: number;
    nationalIdPopup?: {
        isShow: boolean,
        isGoNextPage: boolean
    }
}

export interface SurveyWizardBuilderUseCaseRequest {
    surveyFormValue: SurveyWizardFormInterfaceValue;
    onFirstLoad?: boolean;
    onNextStep?: boolean;
}

export interface SurveyWizardFormInterfaceValue {
    currentStepIndex: number;
    isPre: boolean;
    landingId: number;
    applicationLanguageId: number;
    arabicDisplayName: string;
    englishDisplayName: string;
    isHasIntroductionPage: boolean;
    isHasInstructionPage: boolean;
    isHasFinishPage: boolean;
    isHasApplicantData: boolean;
    isCompleteAfterSubmitEnable: boolean;
    isTwoFactorAuthenticationEnabled: boolean;
    isSkipAskingNationaId: any;
    applicantGroup: {
        key: any;
        title: string;
        title_eng: string;
        otpIsVerified: any;
    };
    surveyGroup: {
        id: number;
        key: string;
    };
    pageStepArray: Array<{
        index: number;
        name: string;
        key: SurveyWizardStepEnum;
        title: string;
        title_eng: string;
        enable: boolean;
    }>;
}

