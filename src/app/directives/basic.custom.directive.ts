import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[basic-directive]'
})

export class BasicDirective implements OnInit {

  constructor(private elementref: ElementRef) {}
  ngOnInit() {
    this.elementref.nativeElement.style.backgroundColor = 'green';
  }
}
