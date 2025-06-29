import { Component, Input } from '@angular/core';
import { ExplanatoryEvidenceSection, ServicesDirectorySection } from 'app/model/landing';

@Component({
  selector: 'app-survay-illustrative-evidence',
  templateUrl: './survay-illustrative-evidence.component.html',
  styleUrls: ['./survay-illustrative-evidence.component.scss']
})
export class SurvayIllustrativeEvidenceComponent {
  @Input()
  explanatoryEvidence:ExplanatoryEvidenceSection | undefined;
}
