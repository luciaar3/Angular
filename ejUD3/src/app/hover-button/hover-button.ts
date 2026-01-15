import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-button',
  imports: [],
  templateUrl: './hover-button.html',
  styleUrl: './hover-button.css',
})
export class HoverButton {
  hoverText(){
    console.log('hola');
  }
  count = 0;
  suma(){
    this.count ++;
  }
}
