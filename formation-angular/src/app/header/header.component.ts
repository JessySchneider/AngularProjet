import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titre: string = "Bonjour";
  isConnected: boolean = false;

  constructor() { 
    
  }

  getIsConnected(){
    return this.isConnected;
  }

  

  ngOnInit() {
  }

}
