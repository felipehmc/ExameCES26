import { TestBed, inject } from '@angular/core/testing';

import { DevedorService } from './devedor.service';

describe('DevedorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevedorService]
    });
  });

  it('should be created', inject([DevedorService], (service: DevedorService) => {
    expect(service).toBeTruthy();
  }));
});
