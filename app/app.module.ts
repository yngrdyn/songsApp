import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthFormModule,
    ProfileModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
