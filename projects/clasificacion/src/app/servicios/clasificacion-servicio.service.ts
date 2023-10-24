import { Injectable } from '@angular/core';
import { ClasificacionInterfaz } from '../modelos/clasificacion-interfaz';
import { CLASIFICACION } from '../modelos/clasificacionMock';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionServicioService {
  getClasificacion(): ClasificacionInterfaz[] {
    return CLASIFICACION;
  }
  
  /**
   * Calculo de puntos.
   * Bucle ForEach que guarda en el campo PT, si tiene ganado +3 si tiene empate +1
   */
  calcularPuntos(): void {
    const clasificacion = this.getClasificacion();
    clasificacion.forEach(clasificacion => {
      clasificacion.PT = 3 * clasificacion.G + clasificacion.E; // Calcula los puntos totales
      clasificacion.DG = clasificacion.GF - clasificacion.GC;
    });
  }
}
