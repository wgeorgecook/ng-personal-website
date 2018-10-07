import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.template.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bio = (<any>data).bio;

  constructor() {

   }

  ngOnInit() {
  }

}
