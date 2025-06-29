import { Component, Input } from '@angular/core';
import { PositiveEffectSection } from 'app/model/landing';

@Component({
  selector: 'app-positive-effect-section',
  templateUrl: './positive-effect-section.component.html',
  styleUrls: ['./positive-effect-section.component.scss']
})
export class PositiveEffectSectionComponent {
  @Input()
  positiveEffect:PositiveEffectSection | undefined;
}
