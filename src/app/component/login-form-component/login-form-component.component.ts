import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css']
})
export class LoginFormComponentComponent implements OnInit {

  constructor(private http :HttpClient) { }

  usernameInput:any = "";
  passwordInput:any = "";
  errorMessage: string = "";

  
  ngOnInit(): void {
  }

  loginButtonPressed(){
    if (this.usernameInput.trim().length === 0){
      this.errorMessage = "Username Required";
    }
    else if (this.passwordInput.trim().length === 0){
      this.errorMessage = "Password Required";
    }
    else {
      this.errorMessage = "";
      this.usernameInput = "";
      this.passwordInput = "";

      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
      this.http.post("https://projectplutonium.azurewebsites.net/login", 
      {
        username: this.usernameInput,
        password: this.passwordInput
      },
      {responseType: 'text'}
        ).subscribe(data=>document.cookie = "token="+data+";");
    }
  }
}
