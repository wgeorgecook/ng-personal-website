import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.template.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Array<string>;

  constructor() {
    this.contacts = (<any>data).contact
  }

  ngOnInit() {
  }

}
