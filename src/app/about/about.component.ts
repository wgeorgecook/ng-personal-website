import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.template.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bio: Array<any>;

  constructor() {
    this.bio = (<any>data).bio
   }

  ngOnInit() {
  }

}
