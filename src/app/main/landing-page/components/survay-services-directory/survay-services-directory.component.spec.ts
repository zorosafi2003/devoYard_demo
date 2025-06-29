import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayServicesDirectoryComponent } from './survay-services-directory.component';

describe('SurvayServicesDirectoryComponent', () => {
  let component: SurvayServicesDirectoryComponent;
  let fixture: ComponentFixture<SurvayServicesDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvayServicesDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayServicesDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
