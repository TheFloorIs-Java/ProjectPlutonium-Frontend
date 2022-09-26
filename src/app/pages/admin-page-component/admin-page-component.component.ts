import {HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page-component.component.html',
  styleUrls: ['./admin-page-component.component.css']
})

export class AdminPageComponentComponent implements OnInit {
  msg!: string;
  msg1!: string;
  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }
  clickEvent(): string{
    this.msg='Button is Clicked';
    return this.msg;}
//////////////////////
   /* clickEvent1(): string{
      this.msg1='Extra Admin placeholder';
      return this.msg1;} */
/////////////////////
      public postEX(){
        this.http.post("http://projectplutonium.azurewebsites.net/users/all",
    {
      responseType:'text'
    }) .subscribe(data=> console.log(data));
        
  }
  //////
   data:Array<Object> | undefined;
  getUsers(){
    this.http.get<Array <Object>>("https://projectplutonium.azurewebsites.net/users/all",
    {
      responseType:'json'
    }) .subscribe(data=>  this.data=data);
return this.data;
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