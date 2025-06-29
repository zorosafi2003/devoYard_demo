import { Component, Input } from '@angular/core';
import { ImplementationStepSection } from 'app/model/landing';

@Component({
  selector: 'app-survay-implementation-steps',
  templateUrl: './survay-implementation-steps.component.html',
  styleUrls: ['./survay-implementation-steps.component.scss']
})
export class SurvayImplementationStepsComponent {
  @Input()
  ImplementationStepData:ImplementationStepSection | undefined;
}
