import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import { LoginResponse } from '../models/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    const userStorage = sessionStorage.getItem('user');

    let user: LoginResponse | null = null;

    if (userStorage) {
      try {
        user = JSON.parse(userStorage);
      } catch (error) {
        sessionStorage.removeItem('user');
        user = null;
      }
    }

    if (!user) {
      return this.router.createUrlTree(['/login']);
    }

    // Si hay usuario
    return true;
  }
}