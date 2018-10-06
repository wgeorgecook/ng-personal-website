import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: Array<string>;

  constructor() {
    this.about = (<any>data).bio
   }

  ngOnInit() {
  }

}
