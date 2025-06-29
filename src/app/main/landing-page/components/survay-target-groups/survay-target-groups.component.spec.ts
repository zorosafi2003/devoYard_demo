import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayTargetGroupsComponent } from './survay-target-groups.component';

describe('SurvayTargetGroupsComponent', () => {
  let component: SurvayTargetGroupsComponent;
  let fixture: ComponentFixture<SurvayTargetGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayTargetGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayTargetGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
