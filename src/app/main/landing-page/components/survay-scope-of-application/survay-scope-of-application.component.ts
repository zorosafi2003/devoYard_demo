import { Component, Input } from '@angular/core';
import { ScopeOfApplicationSection } from 'app/model/landing';

@Component({
  selector: 'app-survay-scope-of-application',
  templateUrl: './survay-scope-of-application.component.html',
  styleUrls: ['./survay-scope-of-application.component.scss']
})
export class SurvayScopeOfApplicationComponent {


  @Input()
  ScopeOfApplicationData:ScopeOfApplicationSection | undefined;
}
