import { Component, OnInit, } from '@angular/core';
import {ZombieGameComponent} from '../../component/zombie-game/zombie-game.component';
import { HttpClient } from '@angular/common/http';
import {user} from '../../Model/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { publishedGame } from 'app/Model/publishedGame';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http :HttpClient, private cookieService : CookieService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit(): void {
    this.getUserSession();
  }

  
  sessionId : String = "";
  user : user|undefined = undefined;
  gameId : string|null = "";
  publishedGame : publishedGame | null = null;


  getUserSession() {
    
      this.http.get<user>("https://projectplutonium.azurewebsites.net/users/session",
        {
          headers: { session: this.cookieService.get("session") },
          responseType: 'json'
        }
      ).subscribe(data => {this.user = data}, error => { this.router.navigate(['/login']) });
    }


  getGameById() {

    this.gameId = this.route.snapshot.paramMap.get('id');
    this.http.get<publishedGame>("https://projectplutonium.azurewebsites.net/publishedGames/id/"+ this.gameId)
    .subscribe(data => {this.publishedGame = data})

  }




  }









