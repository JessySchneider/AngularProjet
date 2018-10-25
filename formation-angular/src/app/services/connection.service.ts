import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private connected:boolean;

  isConnected(){
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
