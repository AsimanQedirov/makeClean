import { Component, OnInit, HostListener } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  windowHeight: number;
  constructor() { }
  
  //2007.625
  @HostListener('window:scroll',['$event'])
  onWindowScroll(event){
    if((window.pageYOffset - this.windowHeight)==128){
      document.getElementById('value1').innerText = '3000';
      
    }
  }
  ngOnInit() {
    this.windowHeight = Math.round($('.statistic').offset().top);
  }

}
