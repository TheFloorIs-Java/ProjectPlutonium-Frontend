import { Component, OnInit } from '@angular/core';
import { scene } from "../../Model/scene"
import { UserService } from 'app/service/user.service';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from 'app/Model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventure-builder',
  templateUrl: './adventure-builder.component.html',
  styleUrls: ['./adventure-builder.component.css']
})
export class AdventureBuilderComponent implements OnInit {

  constructor(public userService :  UserService, private httpClient : HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.User != undefined)
      this.username = this.userService.User.username;
    else
      this.router.navigate(['/login'])
  }

  data : Array<scene> = [
      {
        description: "text here....",
        map: "../../../assets/images/map.png",
        actions: []
      },

  ]

  title = "";

  index = 0;
  actionIndex = 0;
  username : String = "";

  changePage(pageNumber : number){
    this.index = pageNumber;
    this.actionIndex = 0;
  }

  addPage() {
    this.data.push({description: "", map: "../../../assets/images/map.png", actions:[]})
  }

  removePage() {
    if (this.data.length > 1) {
      this.data.splice(this.index, 1)
      this.index = 0;
      this.actionIndex = 0;
    }
  }

  changeAction(actionNumber : number) {
    this.actionIndex = actionNumber;
  }

  addAction(){
    this.data[this.index].actions.push({actionLabel: "action", index: 0})
  }

  removeAction(){
    if (this.data[this.index].actions.length > 0) {
      this.data[this.index].actions.splice(this.actionIndex, 1)
      this.actionIndex = 0;
    }
  }

  saveAdventure(){
    if (this.userService.User == undefined){
      alert("User not found. Return to login")
      return;
    }

    let characters = JSON.stringify(this.data).length;
    alert("Game data is " + characters + " characters long")
    console.log(JSON.stringify(this.data));
    if (characters > 8000){
      return;
    }
    let us = this.userService.User as user;
    let pg : publishedGame = {
      game_id: -1,
      game_title: this.title,
      game_data: JSON.stringify(this.data),
      user: us,
      number_of_plays: 0
    }
    
    this.httpClient.post("https://projectplutonium.azurewebsites.net/publishedGames", pg).subscribe(data => console.log("returned sucessfully."))
  }
}
