import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILabel} from "../../../../../shared/types/labels.type";

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ILabel[]>{
    return this.http.get<ILabel[]>('http://localhost:3000/columns');
  }

  addLabel(name:string){
    return this.http.post('http://localhost:3000/columns', {
      name
    })
  }

}
