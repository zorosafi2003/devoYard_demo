import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCardSectionComponent } from './file-card-section.component';

describe('FileCardSectionComponent', () => {
  let component: FileCardSectionComponent;
  let fixture: ComponentFixture<FileCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileCardSectionComponent]
    });
    fixture = TestBed.createComponent(FileCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
