import { Component, OnInit } from '@angular/core';
import { scene } from 'app/Model/scene';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gameData : Array<scene> = [];

}
