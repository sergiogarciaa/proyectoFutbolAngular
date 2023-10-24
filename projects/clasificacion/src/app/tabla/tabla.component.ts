import { Component } from '@angular/core';
import { ClasificacionInterfaz } from '../modelos/clasificacion-interfaz';
import { ClasificacionServicioService } from '../servicios/clasificacion-servicio.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  clasificacion: ClasificacionInterfaz[] = [];
  puntosT: number | undefined;
  
  constructor(private clasificacionServicio: ClasificacionServicioService) {}

  ngOnInit(): void {
    this.clasificacion = this.clasificacionServicio.getClasificacion();
    // llamada al metodo
    this.clasificacionServicio.calcularPuntos();
  }
}
