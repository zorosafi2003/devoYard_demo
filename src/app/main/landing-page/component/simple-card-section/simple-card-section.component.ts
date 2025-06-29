import { Component, Input } from '@angular/core';
import { SectionsList, TargetGroupSection } from 'app/model/landing';

@Component({
  selector: 'app-simple-card-section',
  templateUrl: './simple-card-section.component.html',
  styleUrls: ['./simple-card-section.component.scss']
})
export class SimpleCardSectionComponent {
  @Input()
  SectionsList:SectionsList | undefined;
}
