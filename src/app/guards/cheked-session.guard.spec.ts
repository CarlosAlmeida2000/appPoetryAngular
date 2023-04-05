import { TestBed } from '@angular/core/testing';

import { ChekedSessionGuard } from './cheked-session.guard';

describe('ChekedSessionGuard', () => {
  let guard: ChekedSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChekedSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
