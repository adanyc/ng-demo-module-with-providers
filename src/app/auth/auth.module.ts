import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { FacebookService } from './strategies/facebook.service';
import { FirebaseService } from './strategies/firebase.service';

@NgModule({})
export class AuthModule {
  static facebook(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthService,
          useClass: FacebookService,
        },
      ],
    };
  }

  static firebase(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AuthService,
          useClass: FirebaseService,
        },
      ],
    };
  }
}
