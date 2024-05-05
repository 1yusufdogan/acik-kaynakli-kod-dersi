/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyAccountService } from './MyAccount.service';

describe('Service: MyAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAccountService]
    });
  });

  it('should ...', inject([MyAccountService], (service: MyAccountService) => {
    expect(service).toBeTruthy();
  }));
});
