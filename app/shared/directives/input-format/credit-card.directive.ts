import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[credit-card]'
})
export class CreditCardDirective {

    @HostBinding('style.border')
    border: string;

    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, '');
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0,16);
        }

        let numbers = [];
        for (let i = 0; i < trimmed.length; i++) {
            numbers.push(trimmed.substr(i, i+4));
        }

        input.value = numbers.join(' ');

        this.border = '';
        if (!/[^\d]+/.test(trimmed)) {
            this.border = '1px solid red';
        }
    }

}