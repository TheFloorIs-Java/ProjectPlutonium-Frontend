import { Component, OnInit, SimpleChange } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor(
    private cookieService : CookieService,
    public userService : UserService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.checkLogin();
    
  }

 

  


  clicked : boolean = false;
  loginstatus : boolean = false;
 


  myFunction() {
     
    this.clicked = !this.clicked;
    
  }

 
 
logOut() {
    
  this.userService.User = undefined;
  let session = this.cookieService.get("session");

   if(session !== ""){
      sessionStorage.clear();
      localStorage.clear();
      this.cookieService.deleteAll();
      
   }

   this.router.navigate(['/login']);


  }

  checkLogin(){
    let session = this.cookieService.get("session");
    if(session !== ""){
      this.loginstatus = true;
    }else {
      this.loginstatus = false;
    }

  }


}
