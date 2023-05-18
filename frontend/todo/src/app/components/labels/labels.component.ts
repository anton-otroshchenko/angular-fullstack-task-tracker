import {Component, OnInit} from '@angular/core';
import {ILabel} from "../../../../../../shared/types/labels.type";
import {LabelsService} from "../../services/labels.service";

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit{
  labels: ILabel[];
  title: string;

  constructor(private labelService: LabelsService) {
  }

  ngOnInit(): void {
    this.labelService.getAll().subscribe((labels)=>{
      this.labels = labels;
    })
  }

  onLabelDeleted(id: string) {
    this.labels = this.labels.filter((label) => label.id !== id);
  }

  onClick() {
    this.labelService.addLabel(this.title).subscribe(() => {
      this.labelService.getAll().subscribe((labels) => {
        this.labels = labels;
        this.title = '';
      });
    });
  }

}
