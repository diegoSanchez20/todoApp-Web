import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';

import { LoginResponse } from '../models/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(): UrlTree {

    const userStorage = sessionStorage.getItem('user');

    if (!userStorage) {
      return this.router.createUrlTree(['/login']);
    }

    try {

      const user: LoginResponse = JSON.parse(userStorage);
      if (user) {
        return this.router.createUrlTree(['/private/task']);
      }
      return this.router.createUrlTree(['/login']);
    } catch {
      sessionStorage.removeItem('user');
      return this.router.createUrlTree(['/login']);
    }
  }
}