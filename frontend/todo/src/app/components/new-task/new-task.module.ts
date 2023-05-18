import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewTaskComponent} from "./new-task.component";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgForOf,
    NgIf
  ],
  declarations: [
    NewTaskComponent
  ],
  bootstrap: [
    NewTaskComponent
  ]
})
export class NewTaskModule { }
