import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFAQComponent } from './survey-faq.component';

describe('SurveyFAQComponent', () => {
  let component: SurveyFAQComponent;
  let fixture: ComponentFixture<SurveyFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFAQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
