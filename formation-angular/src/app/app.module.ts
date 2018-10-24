import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { CurrentUserService } from './services/current-user.service';
import { UsersService } from './services/users.service';
import { TodosService } from './services/todos.service';


library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    TodolistComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [CurrentUserService,UsersService,TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
