import { Component, OnInit } from '@angular/core';
import {scene} from '../../Model/scene';
import { actionbutton } from 'app/Model/actionbutton';

@Component({
  selector: 'app-zombie-game',
  templateUrl: './zombie-game.component.html',
  styleUrls: ['./zombie-game.component.css']
})
export class ZombieGameComponent implements OnInit {

  constructor() { }
 

  data : Array<scene> = [
        //PAGE ZERO
    {
      'description' : "Seek shelter",
      'map' : '../../../assets/images/map.png',
      'actions' : 
      [
        {
          'actionLabel' : 'search the pizzeria',
          'index' : 1
        },
        {
          'actionLabel' : 'search the neaby appartment',
          'index' : 2
        },
        {
          'actionLabel' : 'search the mall',
          'index' : 3
        }
      ]
    },  //PAGE ONE
    {
      'description' : "You are in the pizzeria",
      'map' : '../../../assets/images/map.png',
      'actions' : 
      [
        {
          'actionLabel' : 'check the oven',
          'index' : 2
        },
        {
          'actionLabel' : 'check the perimeter',
          'index' : 3
        },
        {
          'actionLabel' : 'step back outside',
          'index' : 0
        }
      ]
    },  //PAGE TWO
    {
      'description' : "Test 1",
      'map' : '../../../assets/images/map.png',
      'actions' : 
      [
        {
          'actionLabel' : 'search the pizzaria',
          'index' : 1
        },
        {
          'actionLabel' : 'search the neaby appartment',
          'index' : 2
        },
        {
          'actionLabel' : 'search the mall',
          'index' : 3
        }
      ]
    },  //PAGE THREE
    {
      'description' : "Seek shelter",
      'map' : '../../../assets/images/map.png',
      'actions' : 
      [
        {
          'actionLabel' : 'search the pizzaria',
          'index' : 1
        },
        {
          'actionLabel' : 'search the neaby appartment',
          'index' : 2
        },
        {
          'actionLabel' : 'search the mall',
          'index' : 3
        }
      ]
    }

  ]



  description : String = this.data[0].description;

  map : String = this.data[0].map;

  actions : Array<actionbutton> = this.data[0].actions;

  

  ngOnInit(): void {


  }

  changePage(scenenumber:number) {

    this.description = this.data[scenenumber].description;
    this.map = this.data[scenenumber].map;
    this.actions = this.data[scenenumber].actions;

  }

}
