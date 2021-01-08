import { TestBed } from '@angular/core/testing';

import { DOAauthGuard } from './doa-auth.guard';

describe('DOAauthGuard', () => {
  let guard: DOAauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DOAauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
