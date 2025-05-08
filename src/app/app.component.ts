import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loginMessage = '';
  appName = '';

  constructor(
    private auth: AuthService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.loginMessage = this.auth.login('adanyc', '123456');
    this.appName = this.config.getAppName();
  }
}
