import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: Array<any> = ['Taches','Idées','Mon compte'];
  user:User;

  constructor() {
    this.user = new User(1,'Nom par defaut','1@1.fr');
  }

  ngOnInit() {
  }

  getUserName() {
    return this.user.name;
  }



}
