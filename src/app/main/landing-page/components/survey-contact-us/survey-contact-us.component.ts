import { Component, Input } from '@angular/core';
import { ContactUsSection } from 'app/model/landing';

@Component({
  selector: 'app-survey-contact-us',
  templateUrl: './survey-contact-us.component.html',
  styleUrls: ['./survey-contact-us.component.scss']
})
export class SurveyContactUsComponent {
  @Input()
  contactUs:ContactUsSection | undefined;
}
