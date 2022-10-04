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
  
  score : number = 0;
  rank : number = 1;
  avgscore : number = 0;

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }
}
