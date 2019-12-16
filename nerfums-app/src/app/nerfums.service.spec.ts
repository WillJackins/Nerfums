import { TestBed } from '@angular/core/testing';

import { NerfumsService } from './nerfums.service';

describe('NerfumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NerfumsService = TestBed.get(NerfumsService);
    expect(service).toBeTruthy();
  });
});
