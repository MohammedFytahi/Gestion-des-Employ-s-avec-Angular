import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../services/employee.service';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { HighlightDirective } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [DateFormatPipe, HighlightDirective],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<number>(); // Événement pour la modification
  @Output() delete = new EventEmitter<number>(); // Événement pour la suppression

  // Méthode pour émettre l'événement de modification
  onEdit(): void {
    this.edit.emit(this.employee.id);
  }

  // Méthode pour émettre l'événement de suppression
  onDelete(): void {
    this.delete.emit(this.employee.id);
  }
}
