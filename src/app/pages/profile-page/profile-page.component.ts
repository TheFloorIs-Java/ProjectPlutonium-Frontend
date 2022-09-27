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
  user : user = {}as user;

  constructor(private route: ActivatedRoute, private http: HttpClient, private cookieService : CookieService, private router: Router) { 
    this.route.queryParams.subscribe(data => {
      this.id = data['id'];
    });
    console.log(this.id);
  }

  ngOnInit() {

    if (this.id == null) {
      //load page with user info from param
      console.log("get caught");
      
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
