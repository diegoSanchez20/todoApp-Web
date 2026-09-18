import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './views/task/task.component';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
    TaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
