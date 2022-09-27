import { Component, Input, OnInit } from '@angular/core';
import {scene} from '../../Model/scene';
import { actionbutton } from 'app/Model/actionbutton';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {user} from '../../Model/user';
import { publishedGame } from 'app/Model/publishedGame';

@Component({
  selector: 'app-zombie-game',
  templateUrl: './zombie-game.component.html',
  styleUrls: ['./zombie-game.component.css']
})



export class ZombieGameComponent implements OnInit {

  constructor(private http :HttpClient, private cookieService : CookieService) { }
 

  @Input()
  data : Array<scene> = [];

  @Input()
  user : user = {}as user;

  @Input()
  publishedGame : publishedGame =  {}as publishedGame;

 


  description : String = "";

  map : String = "";

  actions : Array<actionbutton> = [];

  gamename : String = "Zombie Survival";
  
  killcount : number = 0;
  
  
 

  

  ngOnInit(): void {
    this.changePage(0,0);
  }

  changePage(sceneindex:number, killcount:number) {

    this.description = this.data[sceneindex].description;
    this.map = this.data[sceneindex].map;
    this.actions = this.data[sceneindex].actions;
    this.killcount += killcount;

  }

  postScoreOnComplete(user : user, killcount: number, publishedGame : publishedGame) {

    this.http.post("https://projectplutonium.azurewebsites.net/scoreCard",
    
    {
      'user' : user.username,
      'publishedGame' : publishedGame.id,
      'date' : publishedGame.id,
      'score' : killcount,


    },{
      headers:{session: this.cookieService.get("session") },

    })

  }

  

}
