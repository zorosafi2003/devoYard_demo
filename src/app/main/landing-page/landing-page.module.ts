import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutSurvayComponent } from './components/about-survay/about-survay.component';
import { SurvayObjectivesComponent } from './components/survay-objectives/survay-objectives.component';
import { SurvayTargetGroupsComponent } from './components/survay-target-groups/survay-target-groups.component';
import { SurvayScopeOfApplicationComponent } from './components/survay-scope-of-application/survay-scope-of-application.component';
import { SurvayImplementationStepsComponent } from './components/survay-implementation-steps/survay-implementation-steps.component';
import { SurvayIllustrativeEvidenceComponent } from './components/survay-illustrative-evidence/survay-illustrative-evidence.component';
import { SurvayServicesDirectoryComponent } from './components/survay-services-directory/survay-services-directory.component';
import { SurveyFormsComponent } from './components/survey-forms/survey-forms.component';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';
import { SurveyFAQComponent } from './component/survey-faq/survey-faq.component';
import { SurveyContactUsComponent } from './components/survey-contact-us/survey-contact-us.component';
import { PositiveEffectSectionComponent } from './components/positive-effect-section/positive-effect-section.component';
import { LandingBannarComponent } from './components/landing-bannar/landing-bannar.component';
import { BannerSectionComponent } from './component/banner-section/banner-section.component';
import { DefaultCardSectionComponent } from './component/default-card-section/default-card-section.component';
import { DefaultCardWithButtonSectionComponent } from './component/default-card-with-button-section/default-card-with-button-section.component';
import { ListSectionComponent } from './component/list-section/list-section.component';
import { AdvanceCardSectioComponent } from './component/advance-card-sectio/advance-card-sectio.component';
import { ContactUsSectionComponent } from './component/contact-us-section/contact-us-section.component';
import { SimpleCardSectionComponent } from './component/simple-card-section/simple-card-section.component';
import { TextSectionComponent } from './component/text-section/text-section.component';
import { FileCardSectionComponent } from './component/file-card-section/file-card-section.component';
import { SectionsComponent } from './component/sections/sections.component';


const routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: ':landingName',
    component: HomeComponent,
    data: { animation: 'home' },
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    AboutSurvayComponent,
    SurvayObjectivesComponent,
    SurvayTargetGroupsComponent,
    SurvayScopeOfApplicationComponent,
    SurvayImplementationStepsComponent,
    SurvayIllustrativeEvidenceComponent,
    SurvayServicesDirectoryComponent,
    SurveyFormsComponent,
    SurveyResultComponent,
    SurveyFAQComponent,
    SurveyContactUsComponent,
    PositiveEffectSectionComponent,
    LandingBannarComponent,
    BannerSectionComponent,
    DefaultCardSectionComponent,
    DefaultCardWithButtonSectionComponent,
    ListSectionComponent,
    AdvanceCardSectioComponent,
    ContactUsSectionComponent,
    SimpleCardSectionComponent,
    TextSectionComponent,
    FileCardSectionComponent,
    SectionsComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    AngularSvgIconModule.forRoot(),
    NgbModule
  ]
})
export class LandingPageModule { }
