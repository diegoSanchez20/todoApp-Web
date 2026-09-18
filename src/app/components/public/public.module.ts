import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './views/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
