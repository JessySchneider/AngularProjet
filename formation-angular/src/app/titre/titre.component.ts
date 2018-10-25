import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {

  titre:string = 'Mon super site';

  constructor(public connection:ConnectionService) { }

  ngOnInit() {
  }

  isConnected(){
    return this.connection.isConnected();
  }

  connect(){
    this.connection.connect();
  }

  disconnect(){
    this.connection.disconnect();
  }

}
