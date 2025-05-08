import { Injectable } from '@angular/core';
import { AuthStrategy } from './auth.strategy';

@Injectable()
export class FacebookService implements AuthStrategy {
  login(username: string, password: string): string {
    return `Logged through FACEBOOK with ${username} and ${password}`;
  }
}
