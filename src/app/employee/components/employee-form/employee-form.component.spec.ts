import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFormComponent } from './employee-form.component';
import {Employee, EmployeeService} from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Crée des mocks pour EmployeeService et Router
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['addEmployee', 'updateEmployee', 'getEmployeeById']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an employee', () => {
    const newEmployee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    component.employee = newEmployee;

    component.onSubmit();

    expect(mockEmployeeService.addEmployee).toHaveBeenCalledWith(newEmployee);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
  });

  it('should update an employee', () => {
    const existingEmployee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    component.employee = existingEmployee;
    component.isEditMode = true;

    component.onSubmit();

    expect(mockEmployeeService.updateEmployee).toHaveBeenCalledWith(existingEmployee);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
  });
});
