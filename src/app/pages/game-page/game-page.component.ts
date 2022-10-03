import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from '../../Model/user';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { publishedGame } from 'app/Model/publishedGame';
import { DatePipe } from '@angular/common';
import { scene } from 'app/Model/scene';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  newDate = new Date();
  currentDate : string | null = "";

  constructor(
    private userService : UserService,
    private http :HttpClient, 
    private cookieService : CookieService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private datePipe: DatePipe,
  ) { 
    this.currentDate = this.datePipe.transform(this.newDate, 'yyyy-MM-dd');

    this.route.queryParams.subscribe(data => {
      this.gameId = data['id'];
    });

    console.log(this.gameId);
  }

  ngOnInit(): void {
    if (this.userService.User == undefined) {
      this.userService.fetchUserBySession().subscribe(data => {
        this.userService.User = data
        this.getGameById();
      }, 
      error => { this.router.navigate(['/login']) });
    }
    else {
      this.getGameById();
    }
  }

  sessionId : String = "";
  user : user = {}as user;
  gameId : string|null = "";
  gameDate : string|null = "";
  publishedGame : publishedGame = {}as publishedGame;
  
  gameData : Array<scene> = [];

  getGameById() {

    if(this.gameId == null){
      this.getGameByDate();
      console.log(this.currentDate);

    }else {
    this.http.get<publishedGame>("https://projectplutonium.azurewebsites.net/publishedGames/id/"+ this.gameId)
    .subscribe(data => {this.publishedGame = data;
      console.log(this.publishedGame.game_data)
      this.gameData = JSON.parse(this.publishedGame.game_data);
    })

   }     
  }


  getGameByDate() {

    console.log(this.currentDate);
      this.http.get<publishedGame>("https://projectplutonium.azurewebsites.net/publishedGames/id/10")//+ this.currentDate)
      .subscribe(data => {this.publishedGame = data;
      this.gameData = JSON.parse(this.publishedGame.game_data);

    })

    }



  }



