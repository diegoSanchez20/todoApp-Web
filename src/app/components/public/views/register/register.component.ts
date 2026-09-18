import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { RegisterRequest } from 'src/app/models/request/register-request';
import { LoginService } from 'src/app/services/login.service';
import { MsgValidators } from 'src/app/utils/msgValidators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
  ) {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    });
  }

  get passwordErrorMsg():string{
    return MsgValidators.msgErrorPassword(this.registerForm,'password');
  }

  get emailErrorMsg():string{
    return MsgValidators.msgErrorEmail(this.registerForm,'email');
  }

  onClick = {
    register: async() => {
   
      if (this.registerForm.invalid) {
        this.registerForm.markAllAsTouched();
        return;
      }
  
      let params: RegisterRequest = {
        email: this.registerForm.value.email.trim(),
        name: this.registerForm.value.name.trim(),
        password: this.registerForm.value.password.trim(),
      }

      let response = await this.services.register(params);
      if(response.status == 201){
        Swal.fire({
          icon: 'success',
          html: `Usuario registrado correctamente.`,
        });
        this.router.navigate(['/login']);
      }
    },
   
    irLogin: async() => {
      this.router.navigate(['/login']);
    }
  }

  services = {
    register: (params:RegisterRequest) => {
      return lastValueFrom(this.loginService.register(params));
    },
  }
}
