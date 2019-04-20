import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})
export class SlickComponent implements OnInit {
    constructor(){
     
    }
 
  images = [
    {
      img: "../../../assets/images/testimonial-1.png"
    },
    {
      img: "../../../assets/images/testimonial-1.png"
    },
    {
      img: "../../../assets/images/testimonial-1.png"
    }
  ]
  ngOnInit() {
    
    }
    
}
