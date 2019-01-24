import { TestBed } from '@angular/core/testing';

import { MediService } from './medi.service';

describe('MediService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediService = TestBed.get(MediService);
    expect(service).toBeTruthy();
  });
});
