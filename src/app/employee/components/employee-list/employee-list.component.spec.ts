import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService, Employee } from '../../services/employee.service';
import { of } from 'rxjs';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    // Crée un mock du service EmployeeService
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getEmployees', 'deleteEmployee']);

    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent],
      providers: [{ provide: EmployeeService, useValue: mockEmployeeService }],
    });

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load employees on init', () => {
    const mockEmployees: Employee[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', hireDate: '2023-02-01' },
    ];
    mockEmployeeService.getEmployees.and.returnValue(mockEmployees);

    fixture.detectChanges(); // Déclenche ngOnInit

    expect(component.employees).toEqual(mockEmployees);
  });

  it('should delete an employee', () => {
    const mockEmployees: Employee[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', hireDate: '2023-02-01' },
    ];
    mockEmployeeService.getEmployees.and.returnValue(mockEmployees);

    fixture.detectChanges(); // Déclenche ngOnInit

    component.deleteEmployee(1); // Supprime l'employé avec l'ID 1
    expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
  });
});
