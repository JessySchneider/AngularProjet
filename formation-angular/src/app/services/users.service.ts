import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[];

  constructor() { 

    this.users = [
        {id:0, name: "Patator",email: "patator@frit.fr"},
        {id:1, name: "Jean",email: "jean@frit.fr"},
        {id:2, name: "Paul",email: "paul@frit.fr"},
        {id:3, name: "Emilie",email: "emilie@frit.fr"},
        {id:4, name: "Caroline",email: "caroline@frit.fr"},
      ];
  }

  getUsers(){
    return this.users;
  }

}
