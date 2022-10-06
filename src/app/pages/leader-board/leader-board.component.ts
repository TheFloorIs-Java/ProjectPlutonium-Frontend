import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from 'app/Model/user';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortable} from "@angular/material/sort";
import {Router} from "@angular/router";
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  data!: any;
  columnsToDisplay = ['username', 'score'];
  datasource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get<any>("https://projectplutonium.azurewebsites.net/leaderboard").subscribe(
      response => {
        this.datasource = new MatTableDataSource(response);
        this.datasource.paginator = this.paginator;
        this.sort.sort(({ id: 'score', start: 'desc'}) as MatSortable);
        this.datasource.sort = this.sort;

      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  goToDetails(row: any){
    //this.router.navigate(['profile', row.user.username]);
    this.router.navigate(
      ['/profile'],
      { queryParams: { id: row.user.user_id } }
    );
  
  }


}
