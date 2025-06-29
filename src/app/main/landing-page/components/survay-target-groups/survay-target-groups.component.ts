import { Component, Input } from '@angular/core';
import { TargetGroupSection } from 'app/model/landing';

@Component({
  selector: 'app-survay-target-groups',
  templateUrl: './survay-target-groups.component.html',
  styleUrls: ['./survay-target-groups.component.scss']
})
export class SurvayTargetGroupsComponent {

  @Input()
  TargetGroupData:TargetGroupSection | undefined;
}
