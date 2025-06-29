import { Component, Input } from '@angular/core';
import { GoalSection, SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-default-card-section',
  templateUrl: './default-card-section.component.html',
  styleUrls: ['./default-card-section.component.scss']
})
export class DefaultCardSectionComponent {
 
  @Input()
  DefaultCardSection:SectionsList | undefined;
}
