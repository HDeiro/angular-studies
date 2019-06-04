import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'gray'
    // );
    this.backgroundColor = 'red';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  constructor(/*private _elementRef:ElementRef, private _renderer:Renderer*/) {

  }

}
