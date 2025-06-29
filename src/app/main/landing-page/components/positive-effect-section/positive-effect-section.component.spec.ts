import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveEffectSectionComponent } from './positive-effect-section.component';

describe('PositiveEffectSectionComponent', () => {
  let component: PositiveEffectSectionComponent;
  let fixture: ComponentFixture<PositiveEffectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveEffectSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositiveEffectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
