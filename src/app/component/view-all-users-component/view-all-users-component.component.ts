import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from 'app/Model/user';


@Component({
  selector: 'app-view-all-users-component',
  templateUrl: './view-all-users-component.component.html',
  styleUrls: ['./view-all-users-component.component.css']
})
export class ViewAllUsersComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUserArray();
  }

  usersList : Array<user> = [];
  userIndex : number = 0;
  loading : boolean = false;

  private loadUserArray() {
    this.http.get<Array<user>>("https://projectplutonium.azurewebsites.net/users/all").subscribe(data => this.usersList = data);
  }

  changeUserIndex(num :number){
    this.userIndex = num;
  }

  saveUser(){
    this.loading = true;
    this.http.put("http://localhost:8080/users/id/"+this.usersList[this.userIndex].user_id, 
    {
      user_id: this.usersList[this.userIndex].user_id,
      username: this.usersList[this.userIndex].username,
      profile_pic_url: this.usersList[this.userIndex].profile_pic_url,
      permission_level: this.usersList[this.userIndex].permission_level
    }
    ).subscribe(data => {this.loadUserArray(), this.loading = false;})
  }
  
  deleteUser(){
    this.loading = true;
    this.userIndex = 0;
    this.http.delete("http://localhost:8080/users/id/"+this.usersList[this.userIndex].user_id ).subscribe(data => {this.loadUserArray(), this.loading = false})
  }
}
