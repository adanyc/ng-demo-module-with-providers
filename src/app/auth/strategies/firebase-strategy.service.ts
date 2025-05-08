import { Injectable } from '@angular/core';
import { AuthStrategy } from './auth-strategy.interface';

@Injectable()
export class FirebaseStrategyService implements AuthStrategy {
  login(username: string, password: string): string {
    return `Logged through FIREBASE with ${username} and ${password}`;
  }
}