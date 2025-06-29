import { Component, Input } from '@angular/core';
import { PannerSection } from 'app/model/landing';

@Component({
  selector: 'app-landing-bannar',
  templateUrl: './landing-bannar.component.html',
  styleUrls: ['./landing-bannar.component.scss']
})
export class LandingBannarComponent {
  @Input()
  panner:PannerSection | undefined;
}
