import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div> 
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <ng-content select="h3"></ng-content>
      <ng-content select=".signup-info"></ng-content>
        <input type="email" name="email" placeholder="Email address" ngModel>
        <input type="password" name="password" placeholder="Password" ngModel>
        <ng-content select="auth-remember"></ng-content>
        <ng-content select="button"></ng-content>
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
