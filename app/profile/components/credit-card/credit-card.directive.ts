import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[credit-card]'
})
export class CreditCardDirective {

    @HostBinding ('style.border')
    border: string;

    @HostListener('input', ['$event'])
    onkeydown(event: KeyboardEvent){
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, '');

        if(trimmed.length > 16){
            trimmed = trimmed.substr(0,16);
        }

        let numbers = [];
        for ( var i = 0; i < trimmed.length; i += 4){
            numbers.push(trimmed.substr(i, 4));
        }

        input.value = numbers.join(' ');

        this.border = '';
        if(/[^\d]+/.test(trimmed)){
            this.border = '1px solid red';
        }

    }
}