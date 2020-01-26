export class Project{
  public name: string; 
  public stack: string;
  public description: string; 
  public imagePaths: string[]; 
  public caseStudy: boolean;

  constructor(name: string, stack: string, description: string, imagePaths: string[], caseStudy: boolean){
    this.name = name;
    this.stack = stack;
    this.description = description;
    this.imagePaths = imagePaths;  
    this.caseStudy = caseStudy;
  }
}


