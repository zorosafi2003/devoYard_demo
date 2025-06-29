import { createReducer, on } from "@ngrx/store";
import { helperActions } from "./helper.action";
import { map } from "app/model/landing";
import { ApplicantDataTabInfo } from "app/model/ApplicantDataTabInfo";

export interface HelperState {
    showErrorAlert: {
        description: string | null;
    };
    buildHeader: any;
    submitApplicantForm: any;
    contactUsSectionMapCards: {
        mapCards: map[]
    };
    applicantData: {
        key : string |null ,
        DataTabInfo : ApplicantDataTabInfo |null;
    } 
}

const initialHelperState: HelperState = {
    showErrorAlert: {
        description: null
    },
    buildHeader: null,
    submitApplicantForm: null,
    contactUsSectionMapCards: {
        mapCards: []
    },
    applicantData:{
        key:null,
        DataTabInfo:null
    }
}

const _helperReducer = createReducer(
    initialHelperState,
    on(helperActions.showErrorAlert, (state, props) => {
        return {
            ...state,
            showErrorAlert:
            {
                description: props.description
            }
        }
    }),
    on(helperActions.buildHeader, (state) => {
        return {
            ...state
        }
    }),
    on(helperActions.contactUsSectionMapCards, (state, props) => {
        return {
            ...state,
            contactUsSectionMapCards: {
                mapCards: props.mapCards
            }
        }
    }),
    on(helperActions.setApplicantKey, (state, props) => {
        return {
            ...state,
            applicantData: {
                key :props.applicantKey,
                DataTabInfo :state.applicantData.DataTabInfo
            } 
        }
    }),
    on(helperActions.setApplicantData, (state, props) => {
        return {
            ...state,
            applicantData: {
                DataTabInfo :props.applicantDataTab,
                key :state.applicantData.key
            } 
        }
    }),
    on(helperActions.clearApplicant, (state, props) => {
        return {
            ...state,
            applicantData: {
                DataTabInfo :null,
                key :null
            } 
        }
    }),
    on(helperActions.showNationalIdPopup, (state, props) => {
        return {
            ...state
        }
    }),
    on(helperActions.showOtpOptionsPopup, (state, props) => {
        return {
            ...state
        }
    })
)

export function helperReducer(state: any, action: any) {
    return _helperReducer(state, action);
}