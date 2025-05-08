import { Injectable, InjectionToken, inject } from '@angular/core';

export const APP_NAME = new InjectionToken<string>('APP_NAME');

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private appName = inject(APP_NAME);

  getAppName(): string {
    return this.appName;
  }
}