import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[];

  constructor() {
    this.users = [
      {id:1, email:'aa@aa.com',name:'Roger'},
      {id:2, email:'bb@aa.com',name:'Sophie'},
      {id:3, email:'cc@aa.com',name:'Jacques'}
    ]
  }

  getUsers(){
    return this.users;
  }
}
