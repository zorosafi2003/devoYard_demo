import { Component, Input } from '@angular/core';
import { SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  @Input()
  Sections:SectionsList | undefined;
}
