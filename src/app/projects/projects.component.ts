import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/data.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.template.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<string>;


  constructor() {
    this.projects = (<any>data).projects
   }

  ngOnInit() {
  }



}
