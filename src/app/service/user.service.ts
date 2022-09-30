import { EventEmitter, Injectable } from '@angular/core';
import { user } from 'app/Model/user';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserBySession = new EventEmitter();   //creates a new event emitter
  subsVar: Subscription = new Subscription;

  User : user|undefined = undefined;

  constructor() {

   }

   onLoginCheckSession(){
    this.getUserBySession.emit(); //emits an event containing a value
   }

}
