import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-photo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './profile-photo.html',
  styleUrl: './profile-photo.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePhotoComponent {}
