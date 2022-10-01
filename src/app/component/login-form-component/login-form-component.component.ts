import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { session } from 'app/Model/session';
import { UserService } from 'app/service/user.service';


@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit {

  constructor(
    private userService :  UserService,
    private http :HttpClient,
    private cookieService : CookieService,
    private router: Router
     ) { }

  ngOnInit(): void {
  }


  usernameInput:any = "";
  passwordInput:any = "";
  errorMessage: string = "";


  


  

  loginButtonPressed(){
    if (this.usernameInput.trim().length === 0){
      this.errorMessage = "Username Required";
    }
    else if (this.passwordInput.trim().length === 0){
      this.errorMessage = "Password Required";
    }
    else {

      this.http.post<session>("https://projectplutonium.azurewebsites.net/login", 
        {
          "username": this.usernameInput,
          "password": this.passwordInput,
        }
      ).subscribe(data=> {
        this.cookieService.set("session", data.session_id);
        this.userService.User = data.user;
        this.router.navigate(['/home']);
      
        
        
      });




      this.errorMessage = "";
      this.usernameInput = "";
      this.passwordInput = "";

    }
  }
}
