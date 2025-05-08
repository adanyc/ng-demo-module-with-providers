import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_NAME } from './config/config.service';
import { AuthService } from './auth/auth.service';
import { AzureStrategyService } from './auth/strategies/azure-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: APP_NAME, useValue: 'My Application' },
    { provide: AuthService, useClass: AzureStrategyService },
  ],
};
