import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoItem } from './evento-item/evento-item';
import { EventoAdd } from './evento-add/evento-add';
import { IEvento } from './evento-item/interfaces/i-evento';
import { Evento } from './servicios/evento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventoItem, EventoAdd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  eventos: IEvento[] = [];

  constructor(private eventoService: Evento) {}

  ngOnInit() {
    this.eventos = this.eventoService.getEventos();
  }

  eliminarEvento(evento: IEvento) {
  this.eventos = this.eventos.filter(e => e !== evento);
  }

  agregarEvento(evento: IEvento) {
    this.eventos = [...this.eventos, evento];
  }


}
