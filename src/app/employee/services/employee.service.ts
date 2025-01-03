import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  email: string;
  hireDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly storageKey = 'employees';

  // Récupère tous les employés depuis localStorage
  getEmployees(): Employee[] {
    const employees = localStorage.getItem(this.storageKey);
    return employees ? JSON.parse(employees) : [];
  }

  // Récupère un employé par son ID
  getEmployeeById(id: number): Employee | undefined {
    const employees = this.getEmployees(); // Utilisez getEmployees() ici
    return employees.find((employee) => employee.id === id);
  }

  // Ajoute un nouvel employé
  addEmployee(employee: Employee): void {
    const employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }

  // Met à jour un employé existant
  updateEmployee(updatedEmployee: Employee): void {
    const employees = this.getEmployees();
    const index = employees.findIndex((e) => e.id === updatedEmployee.id);
    if (index !== -1) {
      employees[index] = updatedEmployee;
      localStorage.setItem(this.storageKey, JSON.stringify(employees));
    }
  }

  // Supprime un employé par son ID
  deleteEmployee(id: number): void {
    const employees = this.getEmployees().filter((e) => e.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }
}
