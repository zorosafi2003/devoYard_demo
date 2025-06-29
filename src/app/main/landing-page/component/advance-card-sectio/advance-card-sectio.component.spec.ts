import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCardSectioComponent } from './advance-card-sectio.component';

describe('AdvanceCardSectioComponent', () => {
  let component: AdvanceCardSectioComponent;
  let fixture: ComponentFixture<AdvanceCardSectioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceCardSectioComponent]
    });
    fixture = TestBed.createComponent(AdvanceCardSectioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
