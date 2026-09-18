import { Component } from '@angular/core';
import { ListaRequest } from 'src/app/models/request/lista-request';
import { Pagination } from 'src/app/models/pagination';
import { DataTaskList, TaskListResponse } from 'src/app/models/response/task-list-response';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public listaRequest!: ListaRequest;
  public listaResponse!: TaskListResponse;
  public listaTareas: DataTaskList[] = [];
  public statusCreateEdit:boolean = false;

  constructor(private fb:FormBuilder,
              private router:Router,
              private taskService:TaskService){}
    
  ngOnInit(): void{
    this.setDataSearch();
    this.loadData();
  }

  public pagination:Pagination = {
    totalRows:0,
    pagesTotal:0,
    pagesActual:1,
    onChangePage:(pagesActual:any) => {
      this.pagination.pagesActual = pagesActual;
      this.listaRequest.pageNumber = pagesActual;
      this.loadData();
    }
  }

  private setDataSearch(){
    this.listaRequest = {
      pageNumber:this.pagination.pagesActual,
      pageSize:10
    }
  }

  private async loadData(){
    let response = await this.service.getAll();
    if(response.status == 200){
      this.listaResponse = response.body!;
      const total = Number(this.listaResponse.meta?.total);
      const size = Number(this.listaResponse.meta?.per_page);
      this.listaTareas = this.listaResponse.data || [];
      this.configPagination(total,size);
    }
  }

  onClick = {
    completedId: async(item:DataTaskList) =>{
      let response = await this.service.completedId(item.id!);
      if(response.status == 200){
        Swal.fire({
          icon: 'success',
          html: `Tarea ${!item.completed ? 'completada' : 'Pendiente'}.`,
        });
        this.loadData();
      }
    },
    delete: async(item:DataTaskList) =>{
      Swal.fire({
        title: "¿Estás seguro de eliminar la tarea?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(async(result) => {
        if (result.isConfirmed) {
          let response = await this.service.delete(item.id!);
          if(response.status == 204){
            Swal.fire({
              icon: 'success',
              html: `Tarea eliminada correctamente.`,
            });
            this.loadData();
          }
        }
      });
    }
  } 

  private configPagination(total:number = 0,size:number = 1){
    this.pagination.totalRows = total;
    this.pagination.pagesTotal = Math.ceil(total/size)
  }

  private service = {
    getAll:() => {
      return lastValueFrom(this.taskService.getAll(this.listaRequest.pageSize,this.listaRequest.pageNumber));
    },
    completedId:(id:number) => {
      return lastValueFrom(this.taskService.completedId(id));
    },
    delete:(id:number) => {
      return lastValueFrom(this.taskService.delete(id));
    },
  }

}
