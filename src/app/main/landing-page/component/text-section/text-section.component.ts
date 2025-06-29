import { Component, Input } from '@angular/core';
import { AboutPannerSection, SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {
  @Input()
  TextSection:SectionsList | undefined
  ngOnInit() {
console.log(this.TextSection)
  }
}
