import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCardSectionComponent } from './default-card-section.component';

describe('DefaultCardSectionComponent', () => {
  let component: DefaultCardSectionComponent;
  let fixture: ComponentFixture<DefaultCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultCardSectionComponent]
    });
    fixture = TestBed.createComponent(DefaultCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
