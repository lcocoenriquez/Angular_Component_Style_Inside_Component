import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.html',
  styleUrls: ['./profile-photo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class ProfilePhotoComponent {}
