import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    });
  }

  iniciarSesion(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Formulario:', this.loginForm.value);

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    console.log('Email:', email);
    console.log('Password:', password);
  }
}
