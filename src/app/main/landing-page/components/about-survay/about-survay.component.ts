import { Component, Input } from '@angular/core';
import { AboutPannerSection } from 'app/model/landing';

@Component({
  selector: 'app-about-survay',
  templateUrl: './about-survay.component.html',
  styleUrls: ['./about-survay.component.scss']
})
export class AboutSurvayComponent {
  @Input()
  aboutPannerData:AboutPannerSection | undefined;
}
