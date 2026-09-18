import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    PaginationComponent
  ],
})
export class SharedModule { }
