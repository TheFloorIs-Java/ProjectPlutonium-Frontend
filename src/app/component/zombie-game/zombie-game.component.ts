import { Component, Input, OnInit } from '@angular/core';
import {scene} from '../../Model/scene';
import { actionbutton } from 'app/Model/actionbutton';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {user} from '../../Model/user';
import { publishedGame } from 'app/Model/publishedGame';
import { score } from "../../Model/score";
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-zombie-game',
  templateUrl: './zombie-game.component.html',
  styleUrls: ['./zombie-game.component.css']
})



export class ZombieGameComponent implements OnInit {

  constructor(private http :HttpClient, private cookieService : CookieService, private userService : UserService) { }
 

  @Input()
  data : Array<scene> = [];

  @Input()
  user : user = {}as user;

  @Input()
  publishedGame : publishedGame =  {}as publishedGame;

 

  pageIndex = 0;

  description : String = "";
  map : String = "";
  actions : Array<actionbutton> = [];
  gamename : String = "Zombie Survival";
  
  score : number = 0;
  health : number = 100;

  itemSet= new Set<String>();
  itemSetString: String = "";
  
  dead = false;

  

  ngOnInit(): void {
    this.changePageNumber(0);
    //this.itemSet.add("Shield")
    this.itemSetString =  Array.from(this.itemSet).join(", ");
  }

  changePage(action : actionbutton, actionIndex : number) {
    
    if (action.onlySelectOnce)
      this.data[this.pageIndex].actions.splice(actionIndex, 1)

    let index : number;
    let random = Math.random()*100;
    console.log(random)
    if (random < (action.chance || 100))
      index = action.index;
    else
      index = action.failIndex || action.index;
   
    this.health += this.data[index].hpAdjust!;
    this.score += this.data[index].score!;

    this.description = this.data[index].description;
    this.map = this.data[index].map;
    this.actions = this.data[index].actions;
    this.pageIndex = index;
    
    if (this.data[index].addItem != undefined && this.data[index].addItem != "")
    this.itemSet.add(this.data[index].addItem!)

    if (this.data[index].removeItem != undefined && this.data[index].removeItem != "")
    this.itemSet.delete(this.data[index].removeItem!)

    this.itemSetString =  Array.from(this.itemSet).join(", ");

    if (this.data[this.pageIndex].actions.length == 0)
      this.postScoreOnComplete();
  }

  changePageNumber(index : number) {
    this.description = this.data[index].description;
    this.map = this.data[index].map;
    this.actions = this.data[index].actions;
    this.pageIndex = index;
  }

  changePageDied(index : number) {
    this.description = this.data[index].description;
    this.map = this.data[index].map;
    this.actions = this.data[index].actions;
    this.pageIndex = index;
    this.dead = true;
    this.postScoreOnComplete();
  }

  postScoreOnComplete() {

    let scoreCard: score = {
      user: this.userService.User!,
      score_id: 0,
      publishedGame: this.publishedGame,
      date_submitted: new Date(),
      score: this.score
    }

    this.http.post("https://projectplutonium.azurewebsites.net/scoreCard",
    scoreCard,
    {
      headers:{session: this.cookieService.get("session") },
    })
  }

  

}
