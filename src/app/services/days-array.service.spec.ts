import { TestBed } from '@angular/core/testing';

import { DaysArrayService } from './days-array.service';

describe('DaysArrayService', () => {
  let service: DaysArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
