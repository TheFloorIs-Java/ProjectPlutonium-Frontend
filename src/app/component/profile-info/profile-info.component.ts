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
  @Input()
  viewingOwnProfile : boolean = false;
  pro_pic_url : String = this.getProfilePicture();

  constructor() { }

  ngOnInit(): void {

    //checks to see if the current user has a profile picture
    if (this.user.profile_pic_url != null) {
      this.pro_pic_url = this.user.profile_pic_url;
    }
  }

  getUsername() : String {
    return "PlaceholderUsername";
  }

  getProfilePicture() : String {
    return "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  }

}
