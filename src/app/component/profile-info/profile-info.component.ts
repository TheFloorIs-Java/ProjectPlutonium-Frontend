import { Component, Input, OnInit } from '@angular/core';
import { user } from 'app/Model/user';
import { HttpClient } from '@angular/common/http';

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
  user1 : user = {}as user;
  newurl : String = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    //checks to see if the current user has a profile picture
    if (this.user.profile_pic_url != null) {
      this.pro_pic_url = this.user.profile_pic_url;
    }
  }

  changeProfilePic() {
    if (this.newurl != "") {
      this.user1 = {
        user_id : this.user.user_id,
        username : "",
        profile_pic_url : this.newurl,
        password : "",
        permission_level : 0,
        salt : ""
      }
      this.httpClient.patch<user>("https://projectplutonium.azurewebsites.net/users/profilepic",this.user1).subscribe(data => this.pro_pic_url = data.profile_pic_url);
    }
  }

  getUsername() : String {
    return "PlaceholderUsername";
  }

  getProfilePicture() : String {
    return "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  }

}
