import { Injectable } from '@angular/core';
import { AuthStrategy } from './strategies/auth.strategy';

@Injectable()
export class AuthService implements AuthStrategy {
  login!: (username: string, password: string) => string;
}
