import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  links = [
    'HOUSE CLEANING',
    'COMMERCIAL CLEANING',
    'WINDOW CLEANING',
    'GREEN CLEANING',
    'RESIDENTIAL CLEANING',
    'RESTAURANT CLEANING',
    'CERAMIC TILE CLEANING',
    'FLOOR CARE CLEANING',
    'OTHER SPECIAL SERVICES'
  ]
  constructor() { }

  ngOnInit() {
  }

}
