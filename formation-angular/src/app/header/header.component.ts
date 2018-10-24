import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titre: string = "Bonjour";
  isConnected: boolean = false;

  constructor(private connectionService:ConnexionService) { 
    
  }

  getIsConnected(){
    return this.isConnected;
  }

  

  ngOnInit() {
  }

}
