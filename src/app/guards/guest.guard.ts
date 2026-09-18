import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {

    const user = sessionStorage.getItem('user');

    if (user) {
      return this.router.createUrlTree(['/private/task']);
    }

    return true;
  }
}