import { Component, OnInit, HostListener, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-celever',
  templateUrl: './celever.component.html',
  styleUrls: ['./celever.component.scss']
})
export class CeleverComponent implements OnInit {
  constructor(private elref : ElementRef,private renderer : Renderer2){}

  

 
  onMouseEnter(el : ElementRef){
    
   this.renderer.addClass(el,'hoverclass');
  }
  onMouseLeave(el : ElementRef){
    this.renderer.removeClass(el,'hoverclass');
  }
  info = [
    {
      img: '../../assets/images/team-1.png'
    },
    {
      img: '../../assets/images/team-2.png'
    },
    {
      img: '../../assets/images/team-3.png'
    },
    {
      img: '../../assets/images/team-1.png'
    },
    {
      img: '../../assets/images/team-2.png'
    },
    {
      img: '../../assets/images/team-3.png'
    }
  ]
  // constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      var $slider = $('.team');
      var $prev = $('.before');
      var $next = $('.after');
      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        prevArrow: $prev,
        nextArrow: $next
      });
    });
  }

}
