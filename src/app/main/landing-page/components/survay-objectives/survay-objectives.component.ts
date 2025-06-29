import { Component, Input } from '@angular/core';
import { GoalSection } from 'app/model/landing';

@Component({
  selector: 'app-survay-objectives',
  templateUrl: './survay-objectives.component.html',
  styleUrls: ['./survay-objectives.component.scss']
})
export class SurvayObjectivesComponent {
  @Input()
  goalSectionData:GoalSection | undefined;
}
