import { Component, signal } from '@angular/core';
import { ProfilePhotoComponent } from './profile-photo.component';

@Component({
  selector: 'app-root',
  imports: [ProfilePhotoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
