import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-column-line',
  templateUrl: './column-line.component.html',
  styleUrls: ['./column-line.component.css']
})
export class ColumnLineComponent {
  @Input() title: string;
  @Input() id: string;
}
