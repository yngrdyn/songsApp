import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  templateUrl: './auth-message.component.html',
  styleUrls: ['auth-message.component.scss']
})
export class AuthMessageComponent {
  days: number = 7;
}