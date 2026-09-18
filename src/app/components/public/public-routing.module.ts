import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { GuestGuard } from 'src/app/guards/guest.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [GuestGuard]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
