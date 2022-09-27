import {HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DeleteUserComponentComponent } from 'app/component/delete-user-component/delete-user-component.component';
import {user} from '../../Model/user';
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
   data:Array<user> | undefined;
  getUsers(){
    this.http.get<Array <user>>("https://projectplutonium.azurewebsites.net/users/all",
    {
      responseType:'json'
    }) .subscribe(data=>  this.data=data);
return this.data;
  }
//////////
  submitUserQ(){
//inputUserName: this inputUserName,
  }
///////////////
deleteUser(){

}
  
}




