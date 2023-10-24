import { TestBed } from '@angular/core/testing';

import { ClasificacionServicioService } from './clasificacion-servicio.service';

describe('ClasificacionServicioService', () => {
  let service: ClasificacionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasificacionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
