import { Injectable } from '@angular/core';
import { IEvento } from '../evento-item/interfaces/i-evento';

@Injectable({
  providedIn: 'root',
})
export class Evento {
   private eventosIniciales: IEvento[] = [
    { titulo: 'Concierto', descripcion: 'En Valencia', imagen: '' },
    { titulo: 'Charla Angular', descripcion: 'En la UPV', imagen: '' },
    { titulo: 'Taller de TypeScript', descripcion: 'Online', imagen: '' }
  ];

  constructor() {}

  getEventos(): IEvento[] {
    return [...this.eventosIniciales];
  }
}
