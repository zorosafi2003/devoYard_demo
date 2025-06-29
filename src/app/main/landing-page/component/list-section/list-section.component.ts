import { Component, Input } from '@angular/core';
import { PositiveEffectSection, SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent {
  @Input()
  ListSection:SectionsList | undefined;
}
