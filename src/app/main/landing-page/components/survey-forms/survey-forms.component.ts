import { Component, Input } from '@angular/core';
import { SurveyFormSection } from 'app/model/landing';

@Component({
  selector: 'app-survey-forms',
  templateUrl: './survey-forms.component.html',
  styleUrls: ['./survey-forms.component.scss']
})
export class SurveyFormsComponent {
  @Input()
  surveyFormSection:SurveyFormSection | undefined;
}
