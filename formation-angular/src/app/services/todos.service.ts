import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos:Todo[];

  constructor() {
    this.todos = [
      new Todo(1, "Titre 1", true),
      new Todo(2, "Titre 2", false),
      {id:3, title:"Titre 3", completed: false}
    ]
  }

  getNbTodoLeft(){
    let nbLeft=0;
    this.todos.filter(todo=>{
      if (todo.completed)nbLeft++;
    })
    return nbLeft;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo:Todo){
    let maxId=0;
    this.todos.forEach(todo=>{
      if (todo.id>maxId)maxId=todo.id;
    })
    todo.id = maxId+1;
    this.todos.unshift(todo);
  }
}
