import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideImgixLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideImgixLoader('https://picsum.photos'),
  ],
};
