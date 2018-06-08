import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <div class="auth-form">
        <auth-form 
          (submitted)="loginUser($event)">
          <h3>Login</h3>
          <div class="signup-info">
            Don't have an account? <span class="bolder-text">Create your account</span>
          </div>
        </auth-form>
      </div>
      <div class="auth-info">
        <div>
          Welcome Back.
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}