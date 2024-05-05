/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArastirmacilarService } from './arastirmacilar.service';

describe('Service: Arastirmacilar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArastirmacilarService]
    });
  });

  it('should ...', inject([ArastirmacilarService], (service: ArastirmacilarService) => {
    expect(service).toBeTruthy();
  }));
});
