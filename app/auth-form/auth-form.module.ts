import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { 
  AuthFormComponent,
  AuthRememberComponent,
  AuthMessageComponent,
 } from './index';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
  ]
})
export class AuthFormModule {}