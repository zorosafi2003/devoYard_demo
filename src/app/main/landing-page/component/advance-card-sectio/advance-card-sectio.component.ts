import { Component, Input } from '@angular/core';
import {  SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-advance-card-sectio',
  templateUrl: './advance-card-sectio.component.html',
  styleUrls: ['./advance-card-sectio.component.scss']
})
export class AdvanceCardSectioComponent {
  @Input()
  AdvanceCardSectioData:SectionsList | undefined;
}
