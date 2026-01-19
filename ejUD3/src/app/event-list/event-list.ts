import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IEvent} from '../interfaces/i-event';
import { TitleFilterPipe } from '../pipes/title-filter-pipe';


@Component({
  selector: 'app-event-list',
  imports: [FormsModule, NgClass,TitleFilterPipe],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {

  searchTerm: string =  '';

  events : IEvent[] = [
    { id: 1, title: 'Concierto de Rock', date: new Date('2026-02-20') },
    { id: 2, title: 'Feria del Libro', date: new Date('2026-03-15') },
    { id: 3, title: 'Exposición de Arte', date: new Date('2026-04-01') },
    { id: 4, title: 'Festival de Cine', date: new Date('2026-05-10') }
  ];
}
