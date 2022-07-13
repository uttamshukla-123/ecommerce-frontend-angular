import { TestBed } from '@angular/core/testing';

import { LuvtoShopFormService } from './luvto-shop-form.service';

describe('LuvtoShopFormService', () => {
  let service: LuvtoShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuvtoShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
