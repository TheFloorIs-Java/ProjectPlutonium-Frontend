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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [DatePipe]
})
export class HomePageComponent implements OnInit {

  
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
    this.userService.onLoginCheckSession();
    this.getUserBySession();
    this.getGameById();
    
  }


  

  
  sessionId : String = "";
  user : user = {}as user;
  gameId : string|null = "";
  gameDate : string|null = "";
  publishedGame : publishedGame = {}as publishedGame;
  
  gameData : Array<scene> = [];


  
  


  getUserBySession() {
    
      this.http.get<user>("https://projectplutonium.azurewebsites.net/users/session",
        {
          headers: { session: this.cookieService.get("session") },
          responseType: 'json'
        }
      ).subscribe(data => {this.user = data}, error => { this.router.navigate(['/login']) });
    }


  


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









