import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private connected:boolean;

  isconnected(){
    return this.connected;
  }

  connect(){
    this.connected = true;
  }

  disconnect(){
    this.connected = false;
  }
  
  constructor() { }


}
