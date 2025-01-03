import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { id: 0, name: '', email: '', hireDate: '' };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const employee = this.employeeService.getEmployeeById(+id);
      if (employee) {
        this.employee = employee;
      }
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee);
    } else {
      this.employeeService.addEmployee(this.employee);
    }
    this.router.navigate(['/employees']);
  }
}
