import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TaskCreateRequest } from 'src/app/models/request/task-create-request';
import { TaskUpdateRequest } from 'src/app/models/request/task-update-request';
import { DataTaskList } from 'src/app/models/response/task-list-response';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-crear-editar',
  templateUrl: './task-crear-editar.component.html',
  styleUrls: ['./task-crear-editar.component.scss']
})
export class TaskCrearEditarComponent {
  item!: DataTaskList;
  taskForm: FormGroup;
  public errorMessages = {
    titulo:"Ingrese el título.",
    descripcion:"Ingrese la descripción.",
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private taskService:TaskService
  ) {
    const navigation = history.state;
    this.item = navigation.item;

    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  ngOnInit(): void{
    if(this.item != undefined){
      // editar
      this.initData();
    }else{
      // crear
    }
  }

  initData(){
    this.taskForm.controls['title'].setValue(this.item.title);
    this.taskForm.controls['description'].setValue(this.item.description);
  }

  onClick = {
    guardar: async() => {
      if (this.taskForm.invalid) {
        this.taskForm.markAllAsTouched();
        return;
      }

      if(this.item == undefined){
        // crear
        let params : TaskCreateRequest = {
          description: this.taskForm.value.description,
          title:this.taskForm.value.title
        }

        let response = await this.service.create(params);
        if(response.status == 201){
          this.router.navigate(['/private/task']);
        }
      }else{
        // editar
        let params : TaskUpdateRequest = {
          description: this.taskForm.value.description,
          title:this.taskForm.value.title,
          completed:this.item!.completed!
        }
        let response = await this.service.update(params,this.item.id!);
        if(response.status == 200){
          this.router.navigate(['/private/task']);
        }
      }
    }
  }

  private service = {
    create:(params: TaskCreateRequest) => {
      return lastValueFrom(this.taskService.create(params));
    },
    update:(params: TaskUpdateRequest, id: number) => {
      return lastValueFrom(this.taskService.update(params, id));
    },
  }
}
