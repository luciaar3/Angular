import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-text-style',
  imports: [NgClass, NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {
  fontSize = 20;
  isError = false;
  selected = true;

  cardStyles = {
    'border': this.selected ? '2px solid blue' : '2px solid gray'
  }
}
