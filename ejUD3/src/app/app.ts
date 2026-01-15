import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { TextStyle } from './text-style/text-style';
import { StatusRow } from './status-row/status-row';
import { HoverButton } from './hover-button/hover-button';
import { SearchBox } from './search-box/search-box';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, TextStyle, StatusRow,HoverButton,SearchBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejUD3');
}
