import { Component, OnInit, } from '@angular/core';
import {ZombieGameComponent} from '../../component/zombie-game/zombie-game.component';
import { HttpClient } from '@angular/common/http';
import {user} from '../../Model/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http :HttpClient) { }

  //gamename = gamename;

  ngOnInit(): void {
    this.getUserSession();
  }

  
  sessionId : String = "";

  getUserSession() {

    this.http.get("https://projectplutonium.azurewebsites.net/users/session",
    {
      responseType: 'json'
    }

    ).subscribe(sessionId => this.sessionId);
    console.log(this.sessionId);

  }



}
