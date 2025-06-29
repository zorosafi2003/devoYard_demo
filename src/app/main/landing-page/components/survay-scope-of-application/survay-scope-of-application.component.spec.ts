import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayScopeOfApplicationComponent } from './survay-scope-of-application.component';

describe('SurvayScopeOfApplicationComponent', () => {
  let component: SurvayScopeOfApplicationComponent;
  let fixture: ComponentFixture<SurvayScopeOfApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayScopeOfApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayScopeOfApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
