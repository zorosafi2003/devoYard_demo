import { Component, Input } from '@angular/core';
import { PannerSection, SectionsList } from 'app/model/landing';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {
  @Input()
  panner:SectionsList | undefined;
  scroll(elem: string, offset: number) {
    const yOffset = offset;
    const element = document.querySelector(elem)!;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y - 100, behavior: 'smooth' })
  }
}
