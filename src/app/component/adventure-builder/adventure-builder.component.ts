import { Component, OnInit } from '@angular/core';
import { scene } from "../../Model/scene"
@Component({
  selector: 'app-adventure-builder',
  templateUrl: './adventure-builder.component.html',
  styleUrls: ['./adventure-builder.component.css']
})
export class AdventureBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data : Array<scene> = [
      {
        description: "text here....",
        map: "../../../assets/images/map.png",
        actions: []
      },

  ]

  index = 0;
  actionIndex = 0;

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

}
