import { Component } from '@angular/core';
import { IncidentItem } from '../incident-item/incident-item';

@Component({
  selector: 'app-incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {

  incidents = [{
    tipo: "Tecnología",
    descripcion: "kashdk bhdfjafj",
    estado: "Enviado"
  }]
}
