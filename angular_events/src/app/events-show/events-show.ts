import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { eventFilterPipe } from '../pipes/event-filter-pipe';

@Component({
  selector: 'app-events-show',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe,NgClass,eventFilterPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  orderDate(){
    this.searchText = '';

    this.events.sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }
  orderPrice(){
    this.searchText = '';

    this.events.sort((a, b) =>
      a.price - b.price
    );
  }
  searchText: string =  '';

  events: IEvent[] = [
    {
      title: 'Concierto de Taylor Swift',
      image: '/img1.jpg',
      date: '2026-12-04',
      description: 'Fabuloso concierto de la gran cantante Taylor Swift',
      price: 24.99,
    },
    {
      title: 'Concierto de Rosalía',
      image: '/img2.webp',
      date: '2026-12-17',
      description: 'Fabuloso concierto de la gran cantante Rosalía',
      price: 45.99,
    },
  ];

}
