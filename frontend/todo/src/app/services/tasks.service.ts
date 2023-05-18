import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {createTask} from "../../../../../shared/types/task-post.type";
import {Itask} from "../../../../../shared/types/task.type";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Itask[]>{
    return this.http.get<Itask[]>('http://localhost:3000/tasks');
  }

  delete(id: string){
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }

  addTask(data:createTask){
    return this.http.post('http://localhost:3000/tasks', data)
  }

  updateTask(data: createTask,id:string){
    return this.http.put(`http://localhost:3000/tasks/${id}`, data)
  }

}
