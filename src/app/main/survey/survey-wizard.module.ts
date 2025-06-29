import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SurveyWizardComponent} from './survey-wizard/survey-wizard.component'
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyWizardRoutingModule } from './survey-wizard.routing';
import { NgSelectModule } from '@ng-select/ng-select';
import { MessageModule } from 'primeng/message';
import { SurveyModule } from 'survey-angular-ui';
import { SurveyCreatorModule } from 'survey-creator-angular';


@NgModule({
  declarations: [
    SurveyWizardComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    CommonModule,
    NgSelectModule,
    MessageModule,
    SurveyWizardRoutingModule ,
     SurveyModule, SurveyCreatorModule 
    ]
})
export class SurveyWizardModule { }
