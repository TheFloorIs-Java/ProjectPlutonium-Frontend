import { Component, OnInit, Input } from '@angular/core';
import { dailychallenge } from 'app/Model/dailychallenge';
import {HttpClient} from '@angular/common/http';
import { user } from 'app/Model/user';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-submit-game-otd',
  templateUrl: './submit-game-otd.component.html',
  styleUrls: ['./submit-game-otd.component.css']
})
export class SubmitGameOTDComponent implements OnInit {

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    this.getAllGamesOTD();
  }

  gameId = 0;
  challenge_date : string = "";
  gameList : Array<dailychallenge> = []; 
  loading : boolean = false;


  removeButton(num : number){
    this.gameId = num;


  }


  submitGameofDay(){

    let dailyChallenge : dailychallenge = {
      id: 0,
      challengeDate: new Date(this.challenge_date+"T00:00:00"),
      publishedGame: {
        game_id : this.gameId,
        game_title : 'test',
        game_data: 'test',
        user : {}as user,
        number_of_plays: 0
        } 

    }
    this.loading = true;
    console.log(this.challenge_date.toString());
    console.log(this.gameId);
    this.http.post<dailychallenge>("https://projectplutonium.azurewebsites.net/dailyChallenge/", dailyChallenge).subscribe(data=> {this.getAllGamesOTD(); this.loading = false; console.log(data)});  

            console.log(this.gameId);
  }

  getAllGamesOTD(){
    this.http.get<Array<dailychallenge>>("https://projectplutonium.azurewebsites.net/dailyChallenge/all").subscribe(data=> {this.gameList=data, console.log(data)});
    
  }

  removeGameOTD(){
    this.loading = true;
    this.gameId = 0;
    this.http.delete<Array<dailychallenge>>("https://projectplutonium.azurewebsites.net/dailyChallenge/"+this.gameList[this.gameId].id).subscribe(data=> {this.getAllGamesOTD(); this.loading = false;});


  }





}
