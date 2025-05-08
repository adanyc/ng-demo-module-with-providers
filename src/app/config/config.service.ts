import { Injectable, Inject, InjectionToken } from '@angular/core';

export const APP_NAME = new InjectionToken<string>('APP_NAME');

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(
    @Inject(APP_NAME) private appName: string,
  ) { }

  getAppName(): string {
    return this.appName;
  }
}
