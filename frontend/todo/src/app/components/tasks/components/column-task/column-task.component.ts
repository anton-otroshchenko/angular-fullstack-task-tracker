import {Component, Input} from '@angular/core';
import {ILabel} from "../../../../../../../../shared/types/labels.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-column-task',
  templateUrl: './column-task.component.html',
  styleUrls: ['./column-task.component.css']
})
export class ColumnTaskComponent {
  @Input() title: string;
  @Input() id: string;
  @Input() labels: ILabel[];
  constructor(private router: Router) {
  }
  onClick(){
    this.router.navigate([`/edit/${this.id}`]);
  }
}
