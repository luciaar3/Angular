import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IIncident } from '../interface/iincident';

@Component({
  selector: '[incident-item]',
  imports: [CommonModule],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {

  IIncident  = {
    tipo: "Tecnología",
    descripcion: "kashdk bhdfjafj",
    estado: "Enviado"
  }
}
