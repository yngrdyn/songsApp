import { NgModule } from '@angular/core';

import { 
  CreditCardDirective,
  TooltipDirective,
 } from './directives';
 
import {
  FilesizePipe
 } from './pipes';

@NgModule({
  declarations: [
    CreditCardDirective,
    TooltipDirective,
    FilesizePipe
  ],
  imports: [ ],
  exports: [
    CreditCardDirective,
    TooltipDirective,
    FilesizePipe,
  ]
})
export class SharedModule { }