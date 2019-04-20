import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondhome',
  templateUrl: './secondhome.component.html',
  styleUrls: ['./secondhome.component.scss']
})
export class SecondhomeComponent implements OnInit {
  images : any =[
    {
      url:'../../assets/images/slide-2.jpg',
      alt : 'Make clean'
    },
    {
      url:'../../assets/images/slide-2.jpg',
      alt : 'Make clean'
    },
    {
      url:'../../assets/images/slide-2.jpg',
      alt : 'Make clean'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
