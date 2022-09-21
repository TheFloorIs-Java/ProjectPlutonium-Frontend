import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page-component.component.html',
  styleUrls: ['./admin-page-component.component.css']
})
export class AdminPageComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//////////////////////Button click to load users
let button = document.getElementById('loadButton');
button.onclick = loadUsers;
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
///////for loop to dispaly
function loadSpan(response){

  for(let i = 0; i < response.length; i++){
      let pokemon = document.createElement("p");
      pokemon.innerText = response[i].Users +" -";
      content.appendChild(pokemon);
  }}