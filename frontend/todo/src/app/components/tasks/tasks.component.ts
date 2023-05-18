import { Component, OnInit } from '@angular/core';
import { ILabel } from '../../../../../../shared/types/labels.type';
import { ColumnsService } from '../../services/columns.service';
import { TasksService } from '../../services/tasks.service';
import { Itask } from '../../../../../../shared/types/task.type';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  columns: ILabel[];
  tasks: Itask[];
  searchKeyword: string = '';

  constructor(
    private columnService: ColumnsService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.columnService.getAll().subscribe((columns) => {
      this.columns = columns;
    });
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(tasks[0].labels)
    });
  }
  filteredTasks(columnId: string): Itask[] {
    return this.tasks.filter((task) => task.columnId === columnId);
  }

}
