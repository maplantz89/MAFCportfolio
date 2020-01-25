import { Project } from './project.model';

export class ProjectService {

  private project: Project[] = [
    new Project(
      'Send It',
      'Angular, Bootstrap, HTML, Sass',
      'Coming Soon - Passion project - Frontend Development. Send It is a new fresh way to track your bouldering progress and log all your climbs...',
      [ 
        'https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg',
        'https://www.willcookforsmiles.com/wp-content/uploads/2019/02/French-Toast-Brioche.jpg',
        'https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg'
      ]),
    new Project(
      'Tutor Center',
      'Adobe XD, Tree Testing, HTML, CSS, Bootstrap',
      'Coming Soon - Redesign Case Study. Is this just because this description is too short for it to take up the same amount of space?',
      [
        'https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg',
        'https://www.willcookforsmiles.com/wp-content/uploads/2019/02/French-Toast-Brioche.jpg'
      ]),
    new Project(
      'Sprout',
      'React, Node.js, PostgreSQL',
      'Full-stack Appliction - Sprout is a formative assessment tool used to help teachers deliver specific, goal-oriented, and timely feedback in the classroom.',
      [
        'https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg',
        'https://www.willcookforsmiles.com/wp-content/uploads/2019/02/French-Toast-Brioche.jpg'
      ]),
    new Project(
      'Spaced Repetition',
      'React, Node.js, PostgreSQL',
      'Spaced Repetition is a responsive web application that allows users to learn a foreign language. The application utilizes an algorithm to implement the spaced repetition learning technique, which allows for more effective learning of a new language. Our application currently allows users to learn Italian, but is structured for the potential to add additional languages in the future.',
      [
        'https://ironcodestudio.com/wp-content/uploads/2015/03/css-remove-horizontal-scrollbar.jpg',
        'https://www.willcookforsmiles.com/wp-content/uploads/2019/02/French-Toast-Brioche.jpg'
      ]),
  ];

  getProjects() {
    return this.project.slice();
  }

  getProjectById(index: number) {
    return this.project[index];
  }

}