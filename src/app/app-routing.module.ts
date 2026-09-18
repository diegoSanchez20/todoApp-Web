import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { RedirectGuard } from './guards/redirect.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./components/public/public.module').then(m => m.PublicModule),
  },
  {
    path:'private',
    canActivate: [AuthGuard],
    loadChildren:() => import('./components/private/private.module').then(m => m.PrivateModule),
  },
  {
    path: '**',
    canActivate: [RedirectGuard],
    children: []
  }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
