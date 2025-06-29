import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayImplementationStepsComponent } from './survay-implementation-steps.component';

describe('SurvayImplementationStepsComponent', () => {
  let component: SurvayImplementationStepsComponent;
  let fixture: ComponentFixture<SurvayImplementationStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayImplementationStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayImplementationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
