import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskListResponse } from '../models/response/task-list-response';
import { TaskCreateRequest } from '../models/request/task-create-request';
import { TaskCreateResponse } from '../models/response/task-create-response';
import { TaskUpdateRequest } from '../models/request/task-update-request';
import { TaskUpdateResponse } from '../models/response/task-update-response';
import { TaskCompleteResponse } from '../models/response/task-complete-response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = `${environment.baseUrl}/tasks`
  
  constructor(private http:HttpClient){}

  public getAll(pageSize:number, page:number):Observable<HttpResponse<TaskListResponse>>{
    return this.http.get<TaskListResponse>(`${this.url}?per_page=${pageSize}&page=${page}` , { observe: 'response'});
  }

  public create(params: TaskCreateRequest):Observable<HttpResponse<TaskCreateResponse>>{
    return this.http.post<TaskCreateResponse>(`${this.url}`, params ,{ observe: 'response'});
  }

  public update(params: TaskUpdateRequest, id: number):Observable<HttpResponse<TaskUpdateResponse>>{
    return this.http.put<TaskUpdateResponse>(`${this.url}/${id}`, params ,{ observe: 'response'});
  }

  public delete(id: number):Observable<HttpResponse<any>>{
    return this.http.delete<any>(`${this.url}/${id}`,{ observe: 'response'});
  }

  public completedId(id: number):Observable<HttpResponse<TaskCompleteResponse>>{
    return this.http.patch<TaskCompleteResponse>(`${this.url}/${id}/complete`,{} ,{ observe: 'response'});
  }

}
