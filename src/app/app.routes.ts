import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // Importez LayoutComponent
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee/components/employee-form/employee-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Utilisez LayoutComponent comme conteneur principal
    children: [
      { path: 'employees', component: EmployeeListComponent },
      { path: 'employees/add', component: EmployeeFormComponent },
      { path: 'employees/edit/:id', component: EmployeeFormComponent },
      { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Redirection par défaut
    ],
  },
];
