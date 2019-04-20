import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-firsthome',
  templateUrl: './firsthome.component.html',
  styleUrls: ['./firsthome.component.scss']
})
export class FirsthomeComponent {
  @ViewChild('f') signupForm:NgForm;   
  constructor() { }

  onSubmit(){
    
  }

}
