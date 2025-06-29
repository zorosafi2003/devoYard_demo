import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSurvayComponent } from './about-survay.component';

describe('AboutSurvayComponent', () => {
  let component: AboutSurvayComponent;
  let fixture: ComponentFixture<AboutSurvayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSurvayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSurvayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
