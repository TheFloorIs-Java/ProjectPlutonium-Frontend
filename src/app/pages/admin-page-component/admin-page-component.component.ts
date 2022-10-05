import {HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DeleteUserComponentComponent } from 'app/component/delete-user-component/delete-user-component.component';
import {user} from '../../Model/user';
import { CookieService } from 'ngx-cookie-service';
import { identifierName, ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page-component.component.html',
  styleUrls: ['./admin-page-component.component.css']
})

export class AdminPageComponentComponent implements OnInit {
 


  constructor(private http :HttpClient, private cookieService : CookieService) { }

  ngOnInit(): void {
  }

  
//////////

public inputUserName: string="";
inputUserPassword: string ="";
inputUserLevel: number =0;
id: number=0;
something : boolean = false;
index = 1;



 loadSection(event:any){
  this.index = event.srcElement.id;
  console.log("function")
 } 

 





  
}
/////////////////////


