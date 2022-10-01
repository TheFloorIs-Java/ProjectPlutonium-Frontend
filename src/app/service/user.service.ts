import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'app/Model/user';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserBySession = new EventEmitter();   //creates a new event emitter
  subsVar: Subscription = new Subscription;

  User : user|undefined = undefined;

  constructor(
    private http :HttpClient,
    private cookieService:CookieService,
    private router :Router
  ) 
  {

  }

   fetchUserBySession(){
    return this.http.get<user>("https://projectplutonium.azurewebsites.net/users/session",
      {
        headers: { session: this.cookieService.get("session") },
        responseType: 'json'
      })
   }

   onLoginCheckSession(){
    this.getUserBySession.emit(); //emits an event containing a value
   }

}
