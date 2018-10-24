import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser:User;

  constructor(usersService:UsersService) { 
    this.currentUser = usersService.getUsers()[2];
  }

  getCurrentUser(){
    return this.currentUser;
  }

}
