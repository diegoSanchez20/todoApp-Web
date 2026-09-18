import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './views/task/task.component';
import { TaskCrearEditarComponent } from './views/task/task-crear-editar/task-crear-editar.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'task',
        component:TaskComponent
      },
      {
        path:'task-create-edit/:id',
        component:TaskCrearEditarComponent,
      },
      {
        path:'',
        redirectTo:'/task',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
