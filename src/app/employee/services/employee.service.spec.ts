import { TestBed } from '@angular/core/testing';
import { EmployeeService, Employee } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);

    // Réinitialiser le localStorage avant chaque test
    localStorage.clear();
  });

  afterEach(() => {
    // Nettoyer le localStorage après chaque test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an employee', () => {
    const employee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    service.addEmployee(employee);

    const employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0]).toEqual(employee);
  });

  it('should get an employee by id', () => {
    const employee1: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    const employee2: Employee = { id: 2, name: 'Jane Doe', email: 'jane@example.com', hireDate: '2023-02-01' };
    service.addEmployee(employee1);
    service.addEmployee(employee2);

    const foundEmployee = service.getEmployeeById(2);
    expect(foundEmployee).toEqual(employee2);
  });

  it('should return undefined if employee is not found by id', () => {
    const employee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    service.addEmployee(employee);

    const foundEmployee = service.getEmployeeById(999); // ID inexistant
    expect(foundEmployee).toBeUndefined();
  });

  it('should update an employee', () => {
    const employee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    service.addEmployee(employee);

    const updatedEmployee: Employee = { id: 1, name: 'John Smith', email: 'john@example.com', hireDate: '2023-01-01' };
    service.updateEmployee(updatedEmployee);

    const employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0]).toEqual(updatedEmployee);
  });

  it('should not update if employee id is not found', () => {
    const employee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    service.addEmployee(employee);

    const updatedEmployee: Employee = { id: 999, name: 'John Smith', email: 'john@example.com', hireDate: '2023-01-01' };
    service.updateEmployee(updatedEmployee);

    const employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0]).toEqual(employee); // L'employé original ne doit pas être modifié
  });

  it('should delete an employee', () => {
    const employee1: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    const employee2: Employee = { id: 2, name: 'Jane Doe', email: 'jane@example.com', hireDate: '2023-02-01' };
    service.addEmployee(employee1);
    service.addEmployee(employee2);

    service.deleteEmployee(1);

    const employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0]).toEqual(employee2);
  });

  it('should not delete if employee id is not found', () => {
    const employee: Employee = { id: 1, name: 'John Doe', email: 'john@example.com', hireDate: '2023-01-01' };
    service.addEmployee(employee);

    service.deleteEmployee(999); // ID inexistant

    const employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0]).toEqual(employee); // L'employé ne doit pas être supprimé
  });
});
