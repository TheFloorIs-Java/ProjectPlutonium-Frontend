import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { publishedGame } from 'app/Model/publishedGame';

@Component({
  selector: 'app-gamelister',
  templateUrl: './gamelister.component.html',
  styleUrls: ['./gamelister.component.css']
})
export class GamelisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getgamelist()
  }

Gamelist : Array<publishedGame> =[];
getgamelist(){
  this.http.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/all/")
  .subscribe(data => this.Gamelist=data)
}
}
