import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {User} from '../models/user.model';
import {UsersService} from '../services/users.service';
import {TodosService} from '../services/todos.service';
import {ConnectionService} from '../services/connection.service';
import {CurrentUserService} from '../services/current-user.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  userList:User[];
  todoList: Todo[];
  currentUser:User;

  tableHeaders:string[] = [
    "nom de la tâche",
    "assigné à"
  ]
  newTitle: string;

  newFormInput:FormControl;

  selectedTodo: Todo;

  constructor(private userService:UsersService,
              private todoService:TodosService,
              private currentUserService:CurrentUserService,
              public connection:ConnectionService) {
  }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
    this.userList = this.userService.getUsers();
    this.currentUser = this.currentUserService.getCurrentUser();
  }

  nbTodoLeft() {
    return this.todoService.getNbTodoLeft();

    // small solution
    // return this.todoList.filter(todo=>todo.completed).length;
  }

  addNewTodo() {
    let todo = new Todo(null, this.newTitle,false);
    this.todoService.addTodo(todo);
  }

  selectTodo(todo: Todo) {
    if (this.isSelectedTodo(todo))
      this.selectedTodo = null;
    else
      this.selectedTodo = todo;
  }

  isSelectedTodo(todo: Todo) {
    return this.selectedTodo && this.selectedTodo.id == todo.id;
  }

  /**
   * Lorsque l'on clique sur l'input, on stoppe la propagation de l'event click
   * afin que la ligne ne reçoive pas le click et donc ne déselectionne pas la ligne
   * @param $event
   */
  inputClick($event) {
    $event.stopPropagation();
  }

  completeTodo(todo: Todo) {
    if (this.connection.isConnected())
      todo.completed = !todo.completed;
  }
}
