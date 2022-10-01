import { Component, Input, OnInit } from '@angular/core';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from 'app/Model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {

  placeholderGamesMade : Array<publishedGame> = [
    {
      game_id: 1,
      game_title: "Game 1",
      game_data:"",
      user: {}as user,
      number_of_plays : 0
    },
    {
      game_id: 1,
      game_title: "Game 2",
      game_data:"",
      user: {}as user,
      number_of_plays : 0
    },
    {
      game_id: 1,
      game_title: "Game 3",
      game_data:"",
      user: {}as user,
      number_of_plays : 0
    }
  ]

  @Input()
  user : user = {}as user;
  gamesCreated : Array<publishedGame> = [];
  stringGamesCreated : Array<String> = [];
  pg : publishedGame = {}as publishedGame;

  score : number = 0;
  rank : number = 1;
  avgscore : number = 0;

  constructor(private http :HttpClient) { }

  ngOnInit(): void {

    this.http.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/userId/" + this.user.user_id)
      .subscribe(data => {this.gamesCreated = data});

      this.stringGamesCreated = this.getStringGamesCreated();
  }

  getStringGamesCreated(): Array<String> {
    let gamesmade: String[] = [];
    for(let i = 0; i < this.gamesCreated.length; i++) {
      gamesmade[i] = this.gamesCreated[i].game_title;
    }
    return gamesmade;
  }

}
