import { Component, Input } from '@angular/core';
import { ServicesDirectorySection } from 'app/model/landing';

@Component({
  selector: 'app-survay-services-directory',
  templateUrl: './survay-services-directory.component.html',
  styleUrls: ['./survay-services-directory.component.scss']
})
export class SurvayServicesDirectoryComponent {
  @Input()
  servicesDirectoryData:ServicesDirectorySection | undefined;
}
