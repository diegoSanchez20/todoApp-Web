import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './views/task/task.component';

const routes: Routes = [
    {
      path:'task',component:TaskComponent
    },
    {
      path:'',
      redirectTo:'/task',
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
