import { Image } from './image.model';

export class Project{
  public name: string; 
  public stack: string;
  public description: string; 
  public imagePaths: Image[]; 

  constructor(name: string, stack: string, description: string, imagePaths: Image[]){
    this.name = name;
    this.stack = stack;
    this.description = description;
    this.imagePaths = imagePaths;  
  }
}


