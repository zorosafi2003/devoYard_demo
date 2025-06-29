import { Component, Input } from '@angular/core';
import { FAQSection, FAQSectionCard } from 'app/model/landing';

@Component({
  selector: 'app-survey-faq',
  templateUrl: './survey-faq.component.html',
  styleUrls: ['./survey-faq.component.scss']
})
export class SurveyFAQComponent {
  @Input()
  FAQSection:FAQSection | undefined;
}
