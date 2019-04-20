import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-serviceoffer',
  templateUrl: './serviceoffer.component.html',
  styleUrls: ['./serviceoffer.component.scss']
})
export class ServiceofferComponent implements OnInit {

  constructor() { }
  info = [
    {
      img:'../../../../assets/images/1.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../../assets/images/2.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../../assets/images/3.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../../assets/images/1.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../../assets/images/2.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../../assets/images/3.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    } 
  ]
  public ngOnInit() {
    $(document).ready(function() {
      var $slider = $('.serviceoff');
      var $prev = $('.toprev');
      var $next = $('.tonext');
      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        prevArrow:$prev,
        nextArrow : $next
      });  
    });
  }

}
