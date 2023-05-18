import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BodyComponent } from "./components/body/body.component";
import {LabelsComponent} from "./components/labels/labels.component";
import {ColumnsComponent} from "./components/columns/columns.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {LabelComponent} from "./components/labels/components/label/label.component";
import {ColumnLineComponent} from "./components/columns/components/column-line.component";
import {ColumnComponent} from "./components/tasks/components/column/column.component";
import {ColumnTaskComponent} from "./components/tasks/components/column-task/column-task.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewTaskModule} from "./components/new-task/new-task.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LabelsComponent,
    ColumnsComponent,
    TasksComponent,
    TabsComponent,
    LabelComponent,
    ColumnLineComponent,
    ColumnComponent,
    ColumnTaskComponent
  ],
  imports: [
    BrowserModule,
    NewTaskModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
