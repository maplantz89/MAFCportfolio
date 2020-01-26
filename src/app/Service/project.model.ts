export class Project{
  public name: string; 
  public stack: string;
  public description: string; 
  public imagePaths: string[]; 
  public caseStudy: boolean;
  public demoLink: string;

  constructor(name: string, stack: string, description: string, imagePaths: string[], caseStudy: boolean, demoLink: string){
    this.name = name;
    this.stack = stack;
    this.description = description;
    this.imagePaths = imagePaths;  
    this.caseStudy = caseStudy;
    this.demoLink = demoLink;
  }
}


