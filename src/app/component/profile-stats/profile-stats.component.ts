import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'app/Model/game';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from 'app/Model/user';

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
  gamesCreated : Array<String> = this.getGamesMade();
  score : number = this.getScore();
  rank : number = this.getRank();
  avgscore : number = this.getAvgScore();

  constructor() { }

  ngOnInit(): void {
  }

  getScore() : number {
    return 5;
  }

  getRank() : number {
    return 1;
  }

  getAvgScore() : number {
    return 6;
  }

  getGamesMade(): Array<String> {
    let gamesmade: String[] = [];
    for(let i = 0; i < this.placeholderGamesMade.length; i++) {
      gamesmade[i] = this.placeholderGamesMade[i].title;
    }
    return gamesmade;
  }

}
