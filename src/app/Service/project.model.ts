export class Project{
  public name: string; 
  public stack: string;
  public description: string; 
  public imagePaths: string[]; 

  constructor(name: string, stack: string, description: string, imagePaths: string[]){
    this.name = name;
    this.stack = stack;
    this.description = description;
    this.imagePaths = imagePaths;  
  }
}


