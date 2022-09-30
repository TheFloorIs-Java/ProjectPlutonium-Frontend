import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';
import { user } from 'app/Model/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  id : String = "";
  user : user = {
    id : 1,
    username : "jacob",
    profile_pic_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/640px-Lewis_Hamilton_2016_Malaysia_2.jpg",
    password : "pass",
    permissionLevel : 1,
    salt : "salt"
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private cookieService : CookieService, private router: Router) { 
    this.route.queryParams.subscribe(data => {
      this.id = data['id'];
    });
    console.log(this.id);
  }

  ngOnInit() {


    //Commented out the redirect for non-logged in users...Need to make a user object above to send into the components
    if (this.id == null) {
     
      this.http.get<user>("https://projectplutonium.azurewebsites.net/users/session",
        {
          headers: { session: this.cookieService.get("session") },
          responseType: 'json'
        }
      ).subscribe(data => {this.user = data}, error => { this.router.navigate(['/login']) });

    } else {
      //check to see if user is logged in

      this.http.get<user>("https://projectplutonium.azurewebsites.net/users/id/" + this.id)
      .subscribe(data => {this.user = data});

    }

  }

  

}
