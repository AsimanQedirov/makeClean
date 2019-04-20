import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-serviceoffer2',
  templateUrl: './serviceoffer2.component.html',
  styleUrls: ['./serviceoffer2.component.scss']
})
export class Serviceoffer2Component implements OnInit {
  serviceInformation : any=[
    {
      img:"../../../../assets/images/4.png",
      header:'House cleaning & Maid Service'
    },
    {
      img:"../../../../assets/images/5.png",
      header:' Office & Commercial Cleaning '
    },
    {
      img:"../../../../assets/images/6.png",
      header:' Windows & Upholstery Cleaning'
    },
    {
      img:"../../../../assets/images/4.png",
      header:'House cleaning & Maid Service'
    },
    {
      img:"../../../../assets/images/5.png",
      header:'Office & Commercial Cleaning'
    },
    {
      img:"../../../../assets/images/6.png",
      header:' Windows & Upholstery Cleaning'
    }
  ]
  constructor() { }

 public ngOnInit() {
  $(document).ready(function() {
    var $slider = $('.slider');
    var $prev = $('.prev');
    var $next = $('.next');
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
