import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(events: IEvent[], searchTerm: string): IEvent[] {
    if (!events || !searchTerm) return events;

    searchTerm = searchTerm.toLowerCase();

    return events.filter((event) => 
      event.title.toLowerCase().includes(searchTerm)
    );
  }

}
