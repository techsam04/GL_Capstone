import { TestBed } from '@angular/core/testing';

import { CouponService } from './coupon.service';

describe('UsersService', () => {
  let service: CouponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
