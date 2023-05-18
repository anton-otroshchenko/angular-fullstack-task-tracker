import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ColumnsService} from "../../services/columns.service";
import {LabelsService} from "../../services/labels.service";
import {TasksService} from "../../services/tasks.service";
import {ILabel} from "../../../../../../shared/types/labels.type";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{
  reactiveForm:FormGroup;
  columns: ILabel[];
  labels: ILabel[];
  id: string;


  constructor(private router: Router, private columnsService: ColumnsService, private labelService: LabelsService, private taskService: TasksService,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.columnsService.getAll().subscribe((columns)=>{
      this.columns = columns;
    })
    this.labelService.getAll().subscribe((labels)=>{
      this.labels = labels;
    })
    this.reactiveForm = new FormGroup({
        title: new FormControl(null),
        details: new FormControl(null),
        columnId: new FormControl(null),
        labels: new FormControl(null)
    });
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
  }
  onSubmit(){
    const formData = this.reactiveForm.value;
    if(this.id){
      const formData = this.reactiveForm.value;
      this.taskService.updateTask(formData,this.id).subscribe();
      this.router.navigate(['/tasks']);
    }
    this.taskService.addTask(formData).subscribe();
    this.router.navigate(['/tasks']);
  }
  onDelete(){
    this.taskService.delete(this.id).subscribe();
    this.router.navigate(['/tasks']);
  }
}
