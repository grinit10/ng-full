import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[basic-directive]'
})

export class BasicDirective implements OnInit {

  constructor(private elementref: ElementRef) {}
  ngOnInit() {
    this.elementref.nativeElement.addEventListener('mouseover', (e: any) => e.target.style.backgroundColor = 'green');
    this.elementref.nativeElement.addEventListener('mouseout', (e: any) => e.target.style.backgroundColor = 'transparent');
  }
}
