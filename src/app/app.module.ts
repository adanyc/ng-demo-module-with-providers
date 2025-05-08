import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ConfigModule.forRoot('My Application'),
    AuthModule.facebook(),
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
