import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Service/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  alertSideNav(){
    this.projectService.alertToggle('toggle');
  }
}
