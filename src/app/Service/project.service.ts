import { Project } from './project.model';
import { Subject, Observable } from 'rxjs';

export class ProjectService {

  private _sidenav = new Subject<string>();
  sidenav: Observable<string> = this._sidenav.asObservable();

  alertToggle(toggle: string){
    this._sidenav.next(toggle);
  }

  private project: Project[] = [
    new Project(
      'Send It',
      'Full Stack Mobile App - Angular, Bootstrap, HTML, Sass, Node, postgreSQL',
      '(Work In Progress) SendIt is a new fresh way to track your bouldering progress and log all your climbs. Implementing user-centered design, currently collecting data to better inform the flow and design of the application. Demo coming soon.',
      [
        './assets/Images/SendIt/SendIt-Login.png',
        './assets/Images/SendIt/SendIt-Loading.png',
        './assets/Images/SendIt/SendIt-Climbs.png',
        './assets/Images/SendIt/SendIt-Dash.png'
      ],
      false,
      '',
      false
    ),
    // new Project(
    //   'White Dot',
    //   'Full Stack Mobile App - Angular, Ionic, HTML, CSS, Bootstrap, Node, postgreSQL',
    //   '(Work In Progress) White Dot is an application designed to record and track your bowling adventures. Partnered with my husband, I am responsible for the backend/database as well as contributing to frontend development. Demo coming soon.',
    //   [
    //     './assets/Images/WhiteDot/whiteDotLogin.png',
    //     './assets/Images/WhiteDot/whiteDotHome.png',
    //     './assets/Images/WhiteDot/whiteDotScore.png'
    //   ],
    //   false,
    //   '',
    //   false
    // ),
    new Project(
      'Sprout',
      'Full-stack Application - React, Node.js, PostgreSQL. Example Teacher Login - Email: teacher3@email.com / Password: Pass1234! / Student Login - MCypress',
      'Sprout is a formative assessment tool used to help teachers deliver specific, goal-oriented, and timely feedback in the classroom. My primary contributions include the student dashboard page as well as backend testing.',
      [
        './assets/Images/Sprout/SproutInAction2.png'
      ],
      false,
      'https://sprout-app.now.sh/',
      true
    ),
    new Project(
      'Spaced Repetition',
      'Full-stack Application- React, Node.js, PostgreSQL. Example Username: Test / Password: Pass1234!',
      'Spaced Repetition is a responsive web application that allows users to learn a foreign language, by utilizes an algorithm to implement allowing for a more effective learning experience. My primary contributions including styling/design and collaborating with team members around the algorithm in the server.',
      [
        './assets/Images/SpacedRepetition/dashboard.png'
      ],
      false,
      'https://spaced-repetition.mac-thinkful.now.sh/register/',
      true
    ),
    new Project(
      'myCookbook',
      'Full-stack Application - React, Node.js, PostgreSQL. Example Username: test / Password: Test1234!',
      'myCookbook built entirely, idea to deployment in two weeks. MyCookbook is intended to allows users to search, create and organize recipes into multiple cookbooks.',
      [
        './assets/Images/myCookbook/cookbookApp.png'
      ],
      false,
      'https://my-cookbook-app.maplantz89.now.sh/login',
      true
    )
  ];

  getProjects() {
    return this.project.slice();
  }

  getProjectById(index: number) {
    return this.project[index];
  }

}