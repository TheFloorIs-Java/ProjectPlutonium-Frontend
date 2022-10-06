import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from "../../Model/user";
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-profile-games-created',
  templateUrl: './profile-games-created.component.html',
  styleUrls: ['./profile-games-created.component.css']
})
export class ProfileGamesCreatedComponent implements OnInit {
//deleteGame(arg0: number) {
//throw new Error('Method not implemented.');
//}

  @Input()
  user : user = {} as user;
  @Input() 
  viewingOwnProfile : boolean = false;
  games_list : Array<publishedGame> = [];

  constructor(private httpClient: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.getUserGames();
  }


  getUserGames(){
    console.log("start request. User id = " + this.user.user_id)
    this.httpClient.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/userId/"+this.user.user_id)
    .subscribe(data => {this.games_list = data; console.log("end request")});
  }

  //for delete game function later
   deleteGame(gameid: number) {
    this.httpClient.delete("https://projectplutonium.azurewebsites.net/publishedGames/id/" + gameid).subscribe(data => this.getUserGames());
   }

}
