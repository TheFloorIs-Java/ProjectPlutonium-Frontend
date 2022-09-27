import { Component, Input, OnInit } from '@angular/core';
import {scene} from '../../Model/scene';
import { actionbutton } from 'app/Model/actionbutton';

@Component({
  selector: 'app-zombie-game',
  templateUrl: './zombie-game.component.html',
  styleUrls: ['./zombie-game.component.css']
})



export class ZombieGameComponent implements OnInit {

  constructor() { }
 

  @Input()
  data : Array<scene> = [];


  description : String = "";

  map : String = "";

  actions : Array<actionbutton> = [];

  gamename : String = "Zombie Survival";

  

  ngOnInit(): void {
    this.changePage(0);
  }

  changePage(sceneindex:number) {

    this.description = this.data[sceneindex].description;
    this.map = this.data[sceneindex].map;
    this.actions = this.data[sceneindex].actions;

  }

}
