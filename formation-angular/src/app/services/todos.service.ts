import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos:Todo[] = []; 
  private tmpTodo:Todo;

  constructor() { 

    this.tmpTodo = new Todo(0, "Lire l'énoncé", false);
    this.todos.push(this.tmpTodo);
    this.tmpTodo = new Todo(1,"Apprendre Angular", false);
    this.todos.push(this.tmpTodo);
    this.tmpTodo = new Todo(2,"Apprendre a utiliser NgFor", false);
    this.todos.push(this.tmpTodo);
    this.tmpTodo = new Todo(3,"Apprendre a faire une liste de tâches", false);
    this.todos.push(this.tmpTodo);    
                                              
  }         
                      
  getTodos(){
    return this.todos;
  }


  addTodos(todo:Todo){ 
    this.todos.push(todo);
  }


}

