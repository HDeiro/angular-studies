import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input('highlight-default') defaultBackgroundColor = 'white';
  @Input('highlight') highlightBackgroundColor = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightBackgroundColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
