import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCardSectionComponent } from './simple-card-section.component';

describe('SimpleCardSectionComponent', () => {
  let component: SimpleCardSectionComponent;
  let fixture: ComponentFixture<SimpleCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleCardSectionComponent]
    });
    fixture = TestBed.createComponent(SimpleCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
