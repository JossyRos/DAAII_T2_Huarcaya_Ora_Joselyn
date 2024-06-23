import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {
  salario: number = 0;
  anios: number = 0;
  utilidad: number | null = null;

  calcularUtilidad() {
    if (this.anios < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.anios >= 1 && this.anios < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.anios >= 2 && this.anios < 5) {
      this.utilidad = this.salario * 0.10;
    } else if (this.anios >= 5 && this.anios < 10) {
      this.utilidad = this.salario * 0.15;
    } else if (this.anios >= 10) {
      this.utilidad = this.salario * 0.20;
    } else {
      this.utilidad = null;
    }
  }
}
