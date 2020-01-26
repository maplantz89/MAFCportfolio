import { Project } from './project.model';

export class ProjectService {

  private project: Project[] = [
    new Project(
      'Send It',
      'Angular, Bootstrap, HTML, Sass',
      'Coming Soon - Passion project - Frontend Development. Send It is a new fresh way to track your bouldering progress and log all your climbs...',
      [ 
        '../../assets/Images/SendIt/SendIt-Login.png',
        '../../assets/Images/SendIt/SendIt-Loading.png',
        '../../assets/Images/SendIt/SendIt-Climbs.png',
        '../../assets/Images/SendIt/SendIt-Dash.png'
      ],
      false,
      'https://sprout-app.now.sh/'
      ),
    new Project(
      'Tutor Center',
      'Adobe XD, Tree Testing, HTML, CSS, Bootstrap',
      'Coming Soon - Redesign Case Study. Is this just because this description is too short for it to take up the same amount of space?',
      [
        '../../assets/Images/TutorCenter/TutorCenterArch.png'
      ],
      true,
      'https://sprout-app.now.sh/'
      ),
    new Project(
      'Sprout',
      'React, Node.js, PostgreSQL',
      'Full-stack Appliction - Sprout is a formative assessment tool used to help teachers deliver specific, goal-oriented, and timely feedback in the classroom.',
      [
        '../../assets/Images/Sprout/SproutInAction2.png'
      ],
      false,
      'https://sprout-app.now.sh/'
      ),
    new Project(
      'Spaced Repetition',
      'React, Node.js, PostgreSQL',
      'Spaced Repetition is a responsive web application that allows users to learn a foreign language, by utilizes an algorithm to implement allowing for a more effective learning experience.',
      [
        '../../assets/Images/SpacedRepetition/dashboard.png'
      ],
      false,
      'https://spaced-repetition.mac-thinkful.now.sh/register/'
      ),
  ];

  getProjects() {
    return this.project.slice();
  }

  getProjectById(index: number) {
    return this.project[index];
  }

}