import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor : string = 'transparent';
  @Input() highlighter : string = 'yellow';

  @HostBinding('style.backgroundColor') bgColor:string;
  
  constructor(private elRef:ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    this.bgColor = this.highlighter;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.bgColor = this.defaultColor;
  }

}
