import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  leaderBoardURL: string = "https://projectplutonium.azurewebsites.net/highScoreCards/all";
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHSInfo(this.leaderBoardURL);
  }

  getHSInfo(leaderBoardURL: string){
    this.http.get<any>(leaderBoardURL,
      {
        responseType : 'json'
      })
      .subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
