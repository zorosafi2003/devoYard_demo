import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCardWithButtonSectionComponent } from './default-card-with-button-section.component';

describe('DefaultCardWithButtonSectionComponent', () => {
  let component: DefaultCardWithButtonSectionComponent;
  let fixture: ComponentFixture<DefaultCardWithButtonSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultCardWithButtonSectionComponent]
    });
    fixture = TestBed.createComponent(DefaultCardWithButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
