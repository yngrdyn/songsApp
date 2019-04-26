import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

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
    FormsModule,
    SharedModule,
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
  ]
})
export class AuthFormModule {}