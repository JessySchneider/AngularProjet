import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {CurrentUserService} from '../services/current-user.service';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems:string[] = [
    "Taches",
    "Idées",
    "Mon compte",
    "Mes taches",
    "Mes idées"
  ]

  currentUser: User;

  constructor(private currentUserService:CurrentUserService,
              public connection:ConnectionService) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.getCurrentUser();
  }

}
