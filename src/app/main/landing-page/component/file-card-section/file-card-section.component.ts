import { Component, Input } from '@angular/core';
import { ExplanatoryEvidenceSection, SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-file-card-section',
  templateUrl: './file-card-section.component.html',
  styleUrls: ['./file-card-section.component.scss']
})
export class FileCardSectionComponent {
  @Input()
  FileCardSection:SectionsList | undefined;
}
