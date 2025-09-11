import { TestBed } from '@angular/core/testing';

import { JobsAppliedService } from './jobs-applied.service';

describe('JobsAppliedService', () => {
  let service: JobsAppliedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsAppliedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
