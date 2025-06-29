import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBannarComponent } from './landing-bannar.component';

describe('LandingBannarComponent', () => {
  let component: LandingBannarComponent;
  let fixture: ComponentFixture<LandingBannarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBannarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingBannarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
