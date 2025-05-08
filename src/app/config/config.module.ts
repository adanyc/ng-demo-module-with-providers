import { ModuleWithProviders, NgModule } from '@angular/core';
import { APP_NAME } from './config.service';

@NgModule({})
export class ConfigModule {
  static forRoot(appName: string): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: APP_NAME,
          useValue: appName,
        }
      ]
    };
  }
}
