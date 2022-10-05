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
  }

  inputGameId = 0;
  challenge_date : Date = new Date;


  submitGameofDay(){
    console.log(this.challenge_date.toString());
    console.log(this.inputGameId);
    this.http.post<dailychallenge>("http://localhost:8080/dailyChallenge/", 
             {
              headers: { challenge_date: this.challenge_date.toString(),
                         game_id: this.inputGameId},
                responseType: 'json'
              }
            ).subscribe(data=> console.log(data));  
  }


  removeGameOTD(){
    
  }

}
