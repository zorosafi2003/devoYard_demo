import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyWizardComponent } from './survey-wizard.component';

describe('SurveyWizardComponent', () => {
  let component: SurveyWizardComponent;
  let fixture: ComponentFixture<SurveyWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
