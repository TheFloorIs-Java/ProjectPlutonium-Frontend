import {HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page-component.component.html',
  styleUrls: ['./admin-page-component.component.css']
})

export class AdminPageComponentComponent implements OnInit {
  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(): string{
    this.msg='Button is Clicked. Space saved for User list JSON to be added';
    return this.msg;
   
  }
}





//////////////////////Button click to load users
/*
let button = document.getElementById('loadButton');
//button.onclick = loadUsers;
button.onclick = 'hi';
function loadUsers(){
  let request = new XMLHttpRequest();
  request.open("GET", "http://localhost:9004/Users");
  request.send();

  request.onreadystatechange = load;

  function load(){
      if(request.readyState == 4 && request.status == 200){
          let responsejson = JSON.parse(request.response);
          console.log(responsejson);
          loadSpan(responsejson);
      }
  }
}
*/