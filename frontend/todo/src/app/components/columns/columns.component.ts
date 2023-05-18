import {Component, OnInit} from '@angular/core';
import {ILabel} from "../../../../../../shared/types/labels.type";
import {ColumnsService} from "../../services/columns.service";

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit{
  columns: ILabel[];
  title: string;

  constructor(private columnService: ColumnsService) {
  }

  ngOnInit(): void {
    this.columnService.getAll().subscribe((columns)=>{
      this.columns = columns;
    })
  }

  onClick() {
    this.columnService.addLabel(this.title).subscribe(() => {
      this.columnService.getAll().subscribe((columns) => {
        this.columns = columns;
        this.title = '';
      });
    });
  }

}
