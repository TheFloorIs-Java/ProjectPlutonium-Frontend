import { Component, Input, OnInit } from '@angular/core';
import { publishedGame } from 'app/Model/publishedGame';
import { user } from 'app/Model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css']
})
export class ProfileStatsComponent implements OnInit {
  @Input()
  user : user = {}as user;
  
  score : number = 0;
  rank : number = 1;
  avgscore : number = 0;

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }
}
