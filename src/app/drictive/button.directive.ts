import { Directive, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit,OnChanges {
  hover!:false

  constructor(private elementref:ElementRef,private render:Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
   this.setStyle(false)
  }
  ngOnInit(): void {
    this.setStyle(false)
  }
  setStyle(hover:boolean){
    var element=this.elementref.nativeElement
    this.render.setStyle(element,'color',"green")
    this.render.setStyle(element,'background','white  ')
    if(hover)this.render.setStyle(element,'border','none')
    if(!hover)this.render.setStyle(element,'border','2px solid yellow')
    // this.render.setStyle(element,'border',hover ? 'none':'1px solid yellow')
    // if
  }
  @HostListener('mouseover')
  mouseover(hover:boolean){
    this.setStyle(true)
  }
  @HostListener('mouseleave')
  mouseleave(hover:boolean){
    this.setStyle(false)
  }
  
}
