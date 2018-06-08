import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';

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
        <span class="remember-message" *ngIf="showMessage">
          You will be logged in for 30 days.
        </span>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `

})
export class AuthFormComponent implements AfterContentInit{

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  showMessage: boolean = false;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  ngAfterContentInit() {
    if(this.remember){
      this.remember.checked.subscribe(
        (checked: boolean) => {
          this.showMessage = checked;
        }
      )
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
