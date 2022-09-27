import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  
  id : number = 0;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    /*this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        console.log(params); 

        this.id = params.id;

        console.log(this.id);
      }
    );
    */

    if (this.id = 0) {
      //load page with user info from param
    } else {
      //check to see if user is logged in
      this.http.get("http://projectplutonium.azurewebsites.net/users/session",
      {
        responseType : 'json'
      }
      ).subscribe(data =>console.log(data));
    }

  }

  

}
