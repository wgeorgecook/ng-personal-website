import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.template.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = (<any>data).contact

  constructor() {

  }

  ngOnInit() {
  }

}
