import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from 'app/Model/user';
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  leaderBoardURL: string = "https://projectplutonium.azurewebsites.net/users/all";
  users: Array<user> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHSInfo(this.leaderBoardURL);
  }

  getHSInfo(leaderBoardURL: string){
    this.http.get<Array<user>>(leaderBoardURL,
      {
        responseType : 'json'
      })
      .subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
