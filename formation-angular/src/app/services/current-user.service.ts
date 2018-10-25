import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser:User;

  constructor(userService:UsersService) {
    this.currentUser = userService.getUsers()[1];
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
