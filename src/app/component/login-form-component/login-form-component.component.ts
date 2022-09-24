import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit {

  constructor(private http :HttpClient, private cookieService : CookieService) { }

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

      this.http.post("https://projectplutonium.azurewebsites.net/login", 
        {
          username: this.usernameInput,
          password: this.passwordInput,
        },
        {
          responseType: 'text'
        }
      ).subscribe(data=> this.cookieService.set("session", data));


      this.errorMessage = "";
      this.usernameInput = "";
      this.passwordInput = "";

    }
  }
}
