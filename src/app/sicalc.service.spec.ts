import { TestBed } from '@angular/core/testing';

import { SicalcService } from './sicalc.service';

describe('SicalcService', () => {
  let service: SicalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SicalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
