import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-photo',
  imports: [NgOptimizedImage],
  template: `<img ngSrc="/200/300" width="200" height="300" alt="A random image from picsum.photos">
  `,
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
export class ProfilePhotoComponent { }
