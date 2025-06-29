import { FormControl, FormArray, FormGroup } from "@angular/forms";
import { ApplicantDataQuestionTypeEnum } from "../enums/applicant-data-question-type.enum";

export interface ApplicantDataFormInterface {
    applicantKey: FormControl<string>;
    questionArray: FormArray<FormGroup<QuestionChildOfApplicantDataFormInterface>>;
}

export interface QuestionChildOfApplicantDataFormInterface {
    id: FormControl<number>;
    label: FormControl<string>;
    controlType: FormControl<string>;
    answer: FormControl<any>;
    questionTypeId: FormControl<ApplicantDataQuestionTypeEnum>;
    isRequired: FormControl<boolean>;
    isEnabled: FormControl<boolean>;
    questionOptionArray: FormArray<FormGroup<QuestionOptionChildOfApplicantDataFormInterface>>;
}

export interface QuestionOptionChildOfApplicantDataFormInterface {
    title: FormControl<string>;
    answerId: FormControl<number>;
    isSelected: FormControl<boolean>;
}