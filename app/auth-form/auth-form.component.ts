import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div> 
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <input type="email" name="email" placeholder="Email address" ngModel>
        <input type="password" name="password" placeholder="Password" ngModel>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  `

})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
