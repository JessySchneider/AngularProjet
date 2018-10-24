import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  
  listeTaches:Todo[];
  listeUsers:User[];
  enteteTableau: Array<String> = ['Nom de la tâche', 'Assigné a'];
  nbTacheCompleted: number = 0;
  newTacheName: string;
  tacheSelected: object =  {id:false};


  constructor(private usersService:UsersService, private todosService:TodosService) { 
  
  }

  ngOnInit() {
    this.listeUsers= this.usersService.getUsers();
    this.listeTaches= this.todosService.getTodos();
  }

  numberOfTacheCompleted(){
    let count = 0;
    this.listeTaches.forEach(element => {
      if(element.completed){
          count++;
        }
    });

    this.nbTacheCompleted = count;
  }

  addTodos(){
   
    if(this.newTacheName !=='' && this.newTacheName != undefined){
      let todo = new Todo(this.listeTaches.length, this.newTacheName, false);
      this.todosService.addTodos(todo);
      this.newTacheName=""; 
    }

  }

  selectItem(id){
    this.tacheSelected = this.listeTaches[id];
  }

}
