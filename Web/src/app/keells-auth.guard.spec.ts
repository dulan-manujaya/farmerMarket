import { TestBed } from '@angular/core/testing';

import { KeellsAuthGuard } from './keells-auth.guard';

describe('KeellsAuthGuard', () => {
  let guard: KeellsAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KeellsAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
