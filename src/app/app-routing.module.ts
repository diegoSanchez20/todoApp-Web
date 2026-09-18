import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./components/public/public.module').then(m => m.PublicModule),
  },
  {
    path:'private',
    loadChildren:() => import('./components/private/private.module').then(m => m.PrivateModule),
  }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
