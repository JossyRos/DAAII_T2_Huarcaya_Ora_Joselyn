import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component {
  numMaterias: number = 0;
  costoTotal: number | null = null;
  costoMateria: number = 520;

  calcularMatricula() {
    let costo = this.numMaterias * this.costoMateria;
    if (this.numMaterias > 5) {
      costo = costo * 0.90; // Aplicar descuento del 10%
    }
    this.costoTotal = costo;
  }
}
