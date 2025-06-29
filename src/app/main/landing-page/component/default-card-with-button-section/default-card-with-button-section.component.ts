import { Component, Input } from '@angular/core';
import { SectionsList, ServicesDirectorySection } from 'app/model/landing';

@Component({
  selector: 'app-default-card-with-button-section',
  templateUrl: './default-card-with-button-section.component.html',
  styleUrls: ['./default-card-with-button-section.component.scss']
})
export class DefaultCardWithButtonSectionComponent {
  @Input()
  DefaultCardWithButtonSection:SectionsList | undefined;

}
