import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private cookieService : CookieService) { }

  ngOnInit(): void {
    this.checkLogin();
  }


  clicked : boolean = false;
  loginstatus : boolean = false;
 


  myFunction() {
     
    this.clicked = !this.clicked;
    
  }

 session = this.cookieService.get("session");
 
logOut() {
    
   if(this.session !== ""){
      sessionStorage.clear();
      localStorage.clear();
      this.cookieService.deleteAll();
      this.checkLogin();
   }

  }

  checkLogin(){
    if(this.session !== ""){
      this.loginstatus = true;
    }else {
      this.loginstatus = false;
    }

  }


}
