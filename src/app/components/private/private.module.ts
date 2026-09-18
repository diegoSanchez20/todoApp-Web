import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './views/task/task.component';
import { PrivateRoutingModule } from './private-routing.module';
import { TaskCrearEditarComponent } from './views/task/task-crear-editar/task-crear-editar.component';
import { LayoutComponent } from './layout/layout/layout.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskCrearEditarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
