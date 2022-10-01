import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from "../../Model/user"

@Component({
  selector: 'app-profile-games-created',
  templateUrl: './profile-games-created.component.html',
  styleUrls: ['./profile-games-created.component.css']
})
export class ProfileGamesCreatedComponent implements OnInit {

  @Input()
  user : user = {} as user;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getUserGames();
  }



  games_list : Array<publishedGame> = [];

  getUserGames(){
    console.log("start request. User id = " + this.user.user_id)
    this.httpClient.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/userId/"+this.user.user_id)
    .subscribe(data => {this.games_list = data; console.log("end request")});
  }

}