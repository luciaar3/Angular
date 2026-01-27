import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [CommonModule],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
  @Input() incident: any;
  @Output() cambio = new EventEmitter<string>();

  changeEstado(){
      this.cambio.emit('Pendiente');
  }
  
}
