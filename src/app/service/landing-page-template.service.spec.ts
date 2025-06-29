import { TestBed } from '@angular/core/testing';

import { LandingPageTemplateService } from './landing-page-template.service';

describe('LandingPageTemplateService', () => {
  let service: LandingPageTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
