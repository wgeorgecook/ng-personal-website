import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component'
import { AboutComponent } from '../about/about.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openContact() {
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '900px',
    });
  }

  openAbout() {
    let dialogRef = this.dialog.open(AboutComponent, {
      width: '900px',
    });
  }

  openProjects() {
    let dialogRef = this.dialog.open(ProjectsComponent, {
      width: '900px',
    });
  }

  ngOnInit() {
  }

}
