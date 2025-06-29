import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayIllustrativeEvidenceComponent } from './survay-illustrative-evidence.component';

describe('SurvayIllustrativeEvidenceComponent', () => {
  let component: SurvayIllustrativeEvidenceComponent;
  let fixture: ComponentFixture<SurvayIllustrativeEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayIllustrativeEvidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayIllustrativeEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
