import { Component, EventEmitter, Output } from '@angular/core';
import { IEvento } from '../evento-item/interfaces/i-evento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {

  @Output() addEvento = new EventEmitter<IEvento>();

  nuevoEvento: IEvento ={
      titulo: '',
      descripcion: '',
      imagen : '',
    };

  guardarEvento(){
    this.addEvento.emit(this.nuevoEvento);

    this.nuevoEvento =
    {
      titulo: '',
      descripcion: '',
      imagen : '',
    };
  }
}
