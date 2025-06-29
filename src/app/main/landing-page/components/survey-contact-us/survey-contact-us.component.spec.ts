import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyContactUsComponent } from './survey-contact-us.component';

describe('SurveyContactUsComponent', () => {
  let component: SurveyContactUsComponent;
  let fixture: ComponentFixture<SurveyContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
