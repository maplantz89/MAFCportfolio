import { Project } from './project.model';

export class ProjectService {

  private project: Project[] = [
    new Project(
      'Send It',
      'Frontend Project - Angular, Bootstrap, HTML, Sass',
      '(Work In Progress) SendIt is a new fresh way to track your bouldering progress and log all your climbs. My climbing and life partner, Aaron Fields-Cypress did the design work while I am responsible for the frontend development.',
      [
        '../../assets/Images/SendIt/SendIt-Login.png',
        '../../assets/Images/SendIt/SendIt-Loading.png',
        '../../assets/Images/SendIt/SendIt-Climbs.png',
        '../../assets/Images/SendIt/SendIt-Dash.png'
      ],
      false,
      'https://github.com/maplantz89/Send-It-Ang',
      true
    ),
    new Project(
      'Tutor Center (Coming Soon)',
      'Redesign Case Study - Adobe XD, Tree Testing, HTML, CSS, Bootstrap',
      'Tutor Center is a redesign case study centered around user research and user experience.',
      [
        '../../assets/Images/TutorCenter/TutorCenterArch.png'
      ],
      true,
      'https://github.com/maplantz89',
      false
    ),
    new Project(
      'Sprout',
      'Full-stack Appliction - React, Node.js, PostgreSQL',
      'Sprout is a formative assessment tool used to help teachers deliver specific, goal-oriented, and timely feedback in the classroom. My primary contributions include the student dashboard page as well as backend testing.',
      [
        '../../assets/Images/Sprout/SproutInAction2.png'
      ],
      false,
      'https://sprout-app.now.sh/',
      true
    ),
    new Project(
      'Spaced Repetition',
      'Full-stack Appliction - React, Node.js, PostgreSQL',
      'Spaced Repetition is a responsive web application that allows users to learn a foreign language, by utilizes an algorithm to implement allowing for a more effective learning experience. My primary contributions including styling/design and collaborating with team members around the algorithm in the server.',
      [
        '../../assets/Images/SpacedRepetition/dashboard.png'
      ],
      false,
      'https://spaced-repetition.mac-thinkful.now.sh/register/',
      true
    ),
    new Project(
      'myCookbook',
      'Full-stack Appliction - React, Node.js, PostgreSQL',
      'myCookbook built entirely, idea to deployment in two weeks. MyCookbook is intended to allows users to search, create and organize recipes into multiple cookbooks.',
      [
        '../../assets/Images/myCookbook/cookbookApp.png'
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