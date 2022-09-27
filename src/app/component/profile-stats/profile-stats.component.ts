import { Component, OnInit } from '@angular/core';
import { Game } from 'app/Model/game';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {

  placeholderGamesMade : Array<Game> = [
    {
      title: "Game 1",
      gameID: 1,
      userID: 1
    },
    {
      title: "Game 2",
      gameID: 2,
      userID: 1
    },
    {
      title: "Game 3",
      gameID: 3,
      userID: 1
    }
  ]

  //gamesmade: Array<String> = this.getGamesMade(); 
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

  /*getGamesMade(): Array<String> {
    for (let i = 0; i< this.placeholderGamesMade.length; i++) {
      this.gamesmade[i] = this.placeholderGamesMade[i].title;
    }
    return this.gamesmade;
  }
*/
}
