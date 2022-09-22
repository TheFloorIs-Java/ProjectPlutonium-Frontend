//import {HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page-component.component.html',
  styleUrls: ['./admin-page-component.component.css']
})
export class AdminPageComponentComponent implements OnInit {
  msg: String ="hi";
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(): void{
  console.log(this.msg)

   
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