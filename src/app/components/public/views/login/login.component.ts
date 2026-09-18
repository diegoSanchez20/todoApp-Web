import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { LoginRequest } from 'src/app/models/request/login-request';
import { LoginService } from 'src/app/services/login.service';
import { MsgValidators } from 'src/app/utils/msgValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(9)]]
    });
  }

  get passwordErrorMsg():string{
    return MsgValidators.msgErrorPassword(this.loginForm,'password');
  }

  get emailErrorMsg():string{
    return MsgValidators.msgErrorEmail(this.loginForm,'email');
  }

  onClick = {
    iniciarSesion: async() => {
  
      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        return;
      }
  
      let response = await this.services.login();

      if(response.status == 200){
        const accessToken = response.body?.data?.access_token;

        if (!accessToken) {
          return;
        }

        sessionStorage.setItem('token', accessToken);
        sessionStorage.setItem('user', JSON.stringify(response.body));
        this.router.navigate(['/private/task']);
      }
    }

   }

  services = {
    login: () => {
      let params:LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      return lastValueFrom(this.loginService.login(params));
    },
  }
}
