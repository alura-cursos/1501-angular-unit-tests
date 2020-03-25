import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({ selector: '[appDarkenOnHover]' })
export class DarkOnHoverDirective {
  @Input()
  brightness = '70%';
  constructor(private el: ElementRef, private render: Renderer) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setElementStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setElementStyle(
      this.el.nativeElement,
      'filter',
      'brightness(100%)'
    );
  }
}
