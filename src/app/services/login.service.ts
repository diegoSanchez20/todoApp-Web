import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/request/login-request';
import { LoginResponse } from '../models/response/login-response';
import { LogoutResponse } from '../models/response/logout-response';
import { LogoutRequest } from '../models/request/logout-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = `${environment.baseUrl}`
  
  constructor(private http:HttpClient){}

  public login(params: LoginRequest):Observable<HttpResponse<LoginResponse>>{
    return this.http.post<LoginResponse>(`${this.url}/login`,params,{ observe: 'response'});
  }

  public logout():Observable<HttpResponse<LogoutResponse>>{
    return this.http.post<LogoutResponse>(`${this.url}/logout`,{},{ observe: 'response'});
  }

}
