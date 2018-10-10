import { TestBed, inject } from '@angular/core/testing';

import { ConsultacepService } from './consultacep.service';

describe('ConsultacepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultacepService]
    });
  });

  it('should be created', inject([ConsultacepService], (service: ConsultacepService) => {
    expect(service).toBeTruthy();
  }));
});
