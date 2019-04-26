import { Directive, Input, OnInit, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit{
    tooltipElement = document.createElement('div');
    visible: boolean = false;

    @Input()
    set tooltip(value) {
        this.tooltipElement.textContent = value;
    }

    hide() {
        this.tooltipElement.classList.remove('tooltip--active');
    }

    show() {
        this.tooltipElement.classList.add('tooltip--active');
    }

    constructor(
        private element: ElementRef,
        private view: ViewContainerRef,
    ){}

    ngOnInit() {
        this.tooltipElement.className = 'tooltip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }
}