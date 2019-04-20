import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-appclean',
  templateUrl: './appclean.component.html',
  styleUrls: ['./appclean.component.scss']
})
export class AppcleanComponent implements OnInit {
  partners = [
    '../../../../assets/images/partner1.png',
    '../../../../assets/images/partner2.png',
    '../../../../assets/images/partner3.png',
    '../../../../assets/images/partner4.png',
    '../../../../assets/images/partner5.png',
    '../../../../assets/images/partner6.png',
    '../../../../assets/images/partner3.png',
    '../../../../assets/images/partner5.png',
    '../../../../assets/images/partner1.png',
  ]
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      var $prev = $('.evvel');
      var $next = $('.sonra');
      var $slider = $('.partnerImages');
            $slider.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 600,
        infinite: false,
        prevArrow : $prev,
        nextArrow : $next
      });  
    });
  }

}
