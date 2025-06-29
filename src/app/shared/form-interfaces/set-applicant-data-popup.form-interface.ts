import { FormControl } from "@angular/forms";

export interface SetApplicantDataPopupFormInterface {
    answer: FormControl<string>;
    optionId: FormControl<any>;
    optionName: FormControl<any>;
    stepIndex: FormControl<number>;
    url: FormControl<string>;
}