import { Component, Output, EventEmitter, ViewChild, ElementRef, ContentChildren, QueryList, AfterContentInit, Renderer } from '@angular/core';

import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit{

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  showMessage: boolean = false;

  @ViewChild('email') email: ElementRef;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  constructor(
    private renderer: Renderer,
  ) {

  }

  ngAfterContentInit() {
    // Focus the first input when rendering the form with platform render safe
    //this.email.nativeElement.focus();
    this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');

    // Changing number of days the remember me will be active
    if(this.message) {
      this.message.days = 30;
    }

    // Subscribe to remember me checkbox to show or hide the message
    if(this.remember){
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
