import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canactivateguardGuardGuard } from './canactivateguard-guard-guard';

describe('canactivateguardGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => canactivateguardGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
