import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { TextStyle } from './text-style/text-style';
import { StatusRow } from './status-row/status-row';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, TextStyle, StatusRow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejUD3');
}
