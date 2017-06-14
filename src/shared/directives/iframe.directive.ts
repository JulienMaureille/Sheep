import {AfterViewChecked, Directive, ElementRef} from "@angular/core";

@Directive({selector: "[iFrameHeight]"})
export class IframeHeightDirective implements AfterViewChecked {
  private el: any;

  ngAfterViewChecked(): void {
    console.log(this.el);
    console.log(this.el.contentDocument);
    console.log(this.el.contentDocument.body);
    console.log(this.el.contentDocument.body.height);
    this.el.height = this.el.contentDocument.body.height;
  }

  constructor(el: ElementRef) {
    this.el = el.nativeElement;

  }
}
