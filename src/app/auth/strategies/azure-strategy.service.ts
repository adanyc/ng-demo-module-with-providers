import { Injectable } from '@angular/core';
import { AuthStrategy } from './auth-strategy.interface';

@Injectable()
export class AzureStrategyService implements AuthStrategy {
  login(username: string, password: string): string {
    return `Logged through AZURE with ${username} and ${password}`;
  }
}