import {User} from './user.model';

export class Todo {

  id:number;
  title:string;
  completed:boolean;
  user?:User;

  constructor(id,title,completed){
    this.id=id;
    this.title=title;
    this.completed=completed;
  }
}
