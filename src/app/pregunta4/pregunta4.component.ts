import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component {
  tipoVehiculo: string = '';
  tasaAlcohol: number | null = null;
  resultado: string = '';

  tiposVehiculos = [
    { tipo: 'Camión', indicador: 'C', tasaMaxima: 0.3 },
    { tipo: 'Autobús', indicador: 'A', tasaMaxima: 0.3 },
    { tipo: 'Turismo', indicador: 'T', tasaMaxima: 0.5 },
    { tipo: 'Motocicleta', indicador: 'M', tasaMaxima: 0.3 }
  ];

  calcularResultado() {
    const vehiculo = this.tiposVehiculos.find(v => v.indicador === this.tipoVehiculo);
    if (vehiculo && this.tasaAlcohol !== null) {
      if (this.tasaAlcohol > vehiculo.tasaMaxima) {
        this.resultado = 'Positivo en el control de alcoholemia';
      } else {
        this.resultado = 'Negativo en el control de alcoholemia';
      }
    } else {
      this.resultado = 'Por favor, ingrese todos los datos correctamente';
    }
  }
}
