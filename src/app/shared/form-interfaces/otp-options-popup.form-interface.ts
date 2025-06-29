import { FormControl } from "@angular/forms";

export interface OtpOptionsPopupFormInterface {
    optionId: FormControl<number>;
    otpCode: FormControl<string>;
    stepIndex: FormControl<number>;
}