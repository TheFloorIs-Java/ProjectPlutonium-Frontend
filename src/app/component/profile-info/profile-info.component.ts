import { Component, Input, OnInit } from '@angular/core';
import { user } from 'app/Model/user';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input()
  user : user = {}as user;
  url : String = this.getProfilePicture();
  bio : String = this.getBio();

  constructor() { }

  ngOnInit(): void {
  }

  getUsername() : String {
    return "PlaceholderUsername";
  }

  getProfilePicture() : String {
    return "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  }

  getBio() : String {
    return "Placeholder Bio";
  }
}
