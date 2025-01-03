import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importez RouterModule

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule], // Importez RouterModule ici
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {}
