import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  private ls = window.localStorage;
  private ss = window.sessionStorage;
  private JWT_TOKEN = 'JWT_TOKEN';


  public getItem(key: any) {
    let value = this.ss.getItem(key);
    try {
      return JSON.parse(value!);
    } catch (e) {
      return null;
    }
  }

  public setItem(key: any, value: any) {
    value = JSON.stringify(value);
    this.ss.setItem(key, value);
    return true;
  }
  public signout() {
    sessionStorage.clear();
    localStorage.clear();
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }
  getJwtToken() {
    return this.ss.getItem(this.JWT_TOKEN);
  }

}
