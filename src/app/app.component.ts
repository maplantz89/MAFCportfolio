import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from './Service/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MAFC-portfolio';
  @ViewChild('sidenav', {static: true}) MatSidenav;
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(){
    this.toggleNav();
  }

  toggleNav(){
    this.projectService.sidenav.subscribe(() =>{
      this.MatSidenav.toggle();
    })
  }
  
  alertSideNav(){
    this.projectService.alertToggle('toggle');
  }
}
