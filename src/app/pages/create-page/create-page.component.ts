import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { scene } from 'app/Model/scene';
import { UserService } from 'app/service/user.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(public userService : UserService, private router:Router) { }

  ngOnInit(): void {
    if (this.userService.User == undefined)
      this.userService.fetchUserBySession().subscribe(data => this.userService.User = data, error => { this.router.navigate(['/login']) });
  }

  gameData : Array<scene> = [];

}
