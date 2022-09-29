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
      id: 1,
      title: "Game 1",
      gameType: "Zombie",
      gameData:"",
      user: {}as user,
      numberOfPlays : 0
    },
    {
      id: 1,
      title: "Game 2",
      gameType: "Zombie",
      gameData:"",
      user: {}as user,
      numberOfPlays : 0
    },
    {
      id: 1,
      title: "Game 3",
      gameType: "Zombie",
      gameData:"",
      user: {}as user,
      numberOfPlays : 0
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

    this.http.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/userId/{id}" + this.user.id)
      .subscribe(data => {this.gamesCreated = data});

      this.stringGamesCreated = this.getStringGamesCreated();
  }

  getStringGamesCreated(): Array<String> {
    let gamesmade: String[] = [];
    for(let i = 0; i < this.gamesCreated.length; i++) {
      gamesmade[i] = this.gamesCreated[i].title;
    }
    return gamesmade;
  }

}
