import { Component, signal } from '@angular/core';
import { ProfilePhoto } from './profile-photo.component';

@Component({
  selector: 'app-root',
  imports: [ProfilePhoto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
