import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './config/config.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private config = inject(ConfigService);
  private auth = inject(AuthService);
  loginMessage = '';
  appName = '';

  ngOnInit(): void {
    this.loginMessage = this.auth.login('adanyc', '123456');
    this.appName = this.config.getAppName();
  }
}
