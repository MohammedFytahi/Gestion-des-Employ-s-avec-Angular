import { Component } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule pour Template-Driven Forms

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez FormsModule ici
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent {
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    hireDate: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.employee.id = Date.now(); // Génère un ID unique
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(['/employees']);
  }
}
