import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LabelsService } from "../../../../services/labels.service";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() title: string;
  @Input() id: string;
  @Output() labelDeleted = new EventEmitter<string>();

  constructor(private labelService: LabelsService) {}

  async onClick() {
    await this.labelService.delete(this.id).subscribe(() => {
      this.labelDeleted.emit(this.id); // Emit the event with the deleted label's ID
    });
  }
}
