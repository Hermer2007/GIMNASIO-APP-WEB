import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaEquipos } from '../models/equipo';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {

  private API_EQUIPOS = '/fitnes.json';

  private http = inject(HttpClient);

  obtenerEquipos(): Observable<RespuestaEquipos> {
    return this.http.get<RespuestaEquipos>(this.API_EQUIPOS);
  }
}