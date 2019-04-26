import { NgModule } from '@angular/core';

import { 
  CreditCardDirective,
  TooltipDirective,
 } from './directives';

@NgModule({
  declarations: [
    CreditCardDirective,
    TooltipDirective,
  ],
  imports: [ ],
  exports: [
    CreditCardDirective,
    TooltipDirective
  ]
})
export class SharedModule { }