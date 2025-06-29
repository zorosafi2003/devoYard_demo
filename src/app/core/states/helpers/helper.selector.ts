import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { HelperState } from "./helper.reducer";

const selectHelpers = (state: AppState) => state.helpers;

const showErrorAlert = createSelector(selectHelpers,
    (state: HelperState) => state.showErrorAlert);

const buildHeader = createSelector(selectHelpers,
    (state: HelperState) => state.buildHeader);

const submitApplicantForm = createSelector(selectHelpers,
    (state: HelperState) => state.submitApplicantForm);

const contactUsSectionMapCards = createSelector(selectHelpers,
    (state: HelperState) => state.contactUsSectionMapCards);

const applicantData = createSelector(selectHelpers,
    (state: HelperState) => state.applicantData);

export const helperSelectors = {
    showErrorAlert,
    buildHeader,
    submitApplicantForm,
    contactUsSectionMapCards,
    applicantData
};