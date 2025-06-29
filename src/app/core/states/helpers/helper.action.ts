import { createAction, props } from "@ngrx/store";
import { ApplicantDataTabInfo } from "app/model/ApplicantDataTabInfo";
import { map } from "app/model/landing";

const showErrorAlert = createAction('[Helper]Show Error Alert', props<{ description: string }>());
const buildHeader = createAction('[Helper]Build Header');
const contactUsSectionMapCards = createAction('[Helper]Contact Us Section Map Cards', props<{ mapCards: map[] }>());
const setApplicantKey = createAction('[Helper] Set Applicant Key ', props<{ applicantKey: string|null }>());
const setApplicantData = createAction('[Helper]Set Applicant Data', props<{  applicantDataTab : ApplicantDataTabInfo|null }>());
const clearApplicant = createAction('[Helper]Clear Applicant Data');
const showNationalIdPopup = createAction('[Helper] Show National Id Popup');
const showOtpOptionsPopup = createAction('[Helper] Show Otp Options Popup');

export const helperActions = {
    showErrorAlert,
    buildHeader,
    contactUsSectionMapCards,
    setApplicantKey ,
    setApplicantData ,
    clearApplicant,
    showNationalIdPopup ,
    showOtpOptionsPopup
}
