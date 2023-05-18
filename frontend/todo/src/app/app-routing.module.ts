import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LabelsComponent} from "./components/labels/labels.component";
import {ColumnsComponent} from "./components/columns/columns.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {NewTaskComponent} from "./components/new-task/new-task.component";

const routes: Routes = [
  { path: '', redirectTo: '/labels', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: 'labels', component: LabelsComponent },
      { path: 'columns', component: ColumnsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'new-task', component: NewTaskComponent },
      { path: 'edit/:id', component: NewTaskComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
