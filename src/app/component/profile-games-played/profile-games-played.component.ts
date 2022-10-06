import { Component, Input, OnInit } from '@angular/core';
import { score } from 'app/Model/score';
import { user } from 'app/Model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-games-played',
  templateUrl: './profile-games-played.component.html',
  styleUrls: ['./profile-games-played.component.css']
})
export class ProfileGamesPlayedComponent implements OnInit {

  @Input()
  user : user = {}as user;
  games_played : Array<score> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getGamesPlayed();
  }

  getGamesPlayed() {
    this.httpClient.get<Array<score>>("https://projectplutonium.azurewebsites.net/scorecard/userId/" + this.user.user_id).subscribe(data => this.games_played = data);
  }

}
