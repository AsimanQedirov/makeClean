import { Component, OnInit, HostListener, ViewChild, Renderer2, ElementRef, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private render: Renderer2, private elref: ElementRef) { }
  onOver(){
      $(".dropdownMenu").addClass('d-block')
  }
  onLeave(){
    $(".dropdownMenu").removeClass('d-block')
  }
 
  fadeOut(){
   $("input").fadeToggle();
  }
  pages = [
    "Home",
    "About Us",
    "Shop",
    "Our Staffs",
    "Services",
    "Latest News"
  ]
  links = [
    "Home Cleaning",
    "Building Cleaning",
    "Commercial Cleaning",
    "Vehicle Cleaning",
    " Maintenance Service",
    "Pest Control"
  ];
  linksHelp = [
    "Contact us",
    "Special Services",
    "Advice & Tips",
    "News & Video",
    "Terms & Condition",
    "Site Map"
  ]

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    if (window.pageYOffset > 153) {
      let element = document.getElementById("nvbr");
      element.classList.add("sticky");
    }
    else {
      let element = document.getElementById("nvbr");
      element.classList.remove("sticky");
    }
  }

  @ViewChild('f') signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm);
  }
  ngOnInit() {

  }
}
