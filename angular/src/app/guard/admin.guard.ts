import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = new Router();
  if (userService.CheckUserValid()) {
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
