import { TestBed } from '@angular/core/testing';

import { PharmaService } from './pharma.service';

describe('PharmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmaService = TestBed.get(PharmaService);
    expect(service).toBeTruthy();
  });
});
