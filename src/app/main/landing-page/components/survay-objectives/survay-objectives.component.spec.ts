import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayObjectivesComponent } from './survay-objectives.component';

describe('SurvayObjectivesComponent', () => {
  let component: SurvayObjectivesComponent;
  let fixture: ComponentFixture<SurvayObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayObjectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
