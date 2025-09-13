import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'profile-photo',
  standalone: true,
  template: `<img src="https://picsum.photos/200" alt="A random profile photo">`,
  styles: [`
    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePhoto { }
