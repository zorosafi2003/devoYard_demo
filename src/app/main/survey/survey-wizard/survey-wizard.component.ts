import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SurveyInfo, SurveyLanguge } from 'app/model/SurveyInfo';
import { Theme } from 'app/model/Theme';
import { RestApiService } from 'app/service/rest-api.service';
import { SuvryContentPages } from 'app/model/SuvryContentPages';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, filter, forkJoin, map, mergeMap, of, pairwise, skipWhile, take, takeUntil, takeWhile } from 'rxjs';
import { ApplicantDataTabInfo } from 'app/model/ApplicantDataTabInfo';
import { AnswersDic, SubmitSurvey } from 'app/model/SuvryContentPages copy';
import { Location } from '@angular/common';
import { SurveyService } from 'app/service/survey.service';
import { SaveAnswersSurveyModel, AnswersDicChildOfSaveAnswersSurveyModel } from 'app/model/save-answers-survey.model';
import { MessageService } from 'primeng/api';
import {
  ApplicantChildOfSurveyWizardFormInterface, PageStepChildOfSurveyWizardFormInterface,
  SurveyChildOfSurveyWizardFormInterface, SurveyWizardFormInterface
} from 'app/shared/form-interfaces/survey-wizard.form-interface';
import { SurveyWizardStepEnum } from 'app/shared/enums/survey-wizard-step.enum';
import { LandingPageTemplateService } from 'app/service/landing-page-template.service';
import { ApplicantService } from 'app/service/applicant.service';
import { SurveyWizardBuilderUseCase, SurveyWizardFormInterfaceValue } from 'app/core/usecases/survey/survey-wizard-builder.usecase';
import { Store } from '@ngrx/store';
import { helperActions } from 'app/core/states/helpers/helper.action';
import Swal from 'sweetalert2';
import { Actions, ofType } from '@ngrx/effects';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Model } from 'survey-core';
import { jsonAr } from 'app/data/survey.ar';
import { jsonEn } from 'app/data/survey.en';

@Component({
  selector: 'app-survey-wizard',
  templateUrl: './survey-wizard.component.html',
  styleUrls: ['./survey-wizard.component.scss']
})
export class SurveyWizardComponent {


  surveyModel: Model;

  constructor(
    public restApi: RestApiService, private route: ActivatedRoute, private router: Router,
    private location: Location, private _surveyService: SurveyService, private _messageService: MessageService,
    private _formBuilder: FormBuilder, private _landingPageTemplateService: LandingPageTemplateService,
    private _ApplicantService: ApplicantService, private _surveyWizardBuilderUseCase: SurveyWizardBuilderUseCase,
    private _store: Store, private _actions: Actions, private _Title: Title) {

    this.loadSurveyJs();
  }

  private loadSurveyJs() {
    this.surveyModel = new Model(jsonAr);
    this.surveyModel.locale = 'ar';
    this.surveyModel.rightToLeft = true;

    this.surveyModel.css = {
      root: "root__container",
      question: {
        title: "quastion-title"
      },
      radiogroup: {
        root: "radio-group__container", // The whole question container
      }
    };

  }

}