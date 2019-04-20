import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  info = [
    {
      img:'../../../assets/images/1.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../assets/images/2.jpg',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../assets/images/3.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../assets/images/7.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../assets/images/8.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    },
    {
      img:'../../../assets/images/9.png',
      header:'HOUSE CLEANING',
      paragraph:'Magni dolores eos qui ratione kavo uptatem sequi nescin.'
    } 
  ]
  constructor() { }

  ngOnInit() {
  }

}
