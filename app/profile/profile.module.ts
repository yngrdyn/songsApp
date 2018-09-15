import { NgModule } from '@angular/core';

import { 
  CreditCardComponent,
  CreditCardDirective,
  ProfileComponent
 } from './index';

@NgModule({
  declarations: [
    CreditCardComponent,
    CreditCardDirective,
    ProfileComponent,
  ],
  imports: [ ],
  exports: [
    ProfileComponent,
  ]
})
export class ProfileModule { }