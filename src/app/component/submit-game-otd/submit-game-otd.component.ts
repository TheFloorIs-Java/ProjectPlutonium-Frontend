import { Component, OnInit, Input } from '@angular/core';
import { dailychallenge } from 'app/Model/dailychallenge';
import {HttpClient} from '@angular/common/http';



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
  challenge_date : Date = new Date;
  gameList : Array<dailychallenge> = []; 
  loading : boolean = false;


  removeButton(num : number){
    this.gameId = num;


  }


  submitGameofDay(){
    this.loading = true;
    console.log(this.challenge_date.toString());
    console.log(this.gameId);
    this.http.post<dailychallenge>("http://localhost:8080/dailyChallenge/", 
             {
              headers: { challenge_date: this.challenge_date.toString(),
                         game_id: this.gameId },
                responseType: 'json'
              }
            ).subscribe(data=> console.log(data));  

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
