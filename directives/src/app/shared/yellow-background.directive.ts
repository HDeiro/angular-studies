import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[yellowBackground]' //Only appliable to <p>
})
export class YellowBackgroundDirective {
  constructor(private _elementRef:ElementRef, private _renderer:Renderer) {
    // ElementRef isn't safe enough because it may allow XSS (access element directly)
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    this._renderer.setElementStyle(_elementRef.nativeElement,  'background-color', 'yellow');
  }
}
