import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortable} from "@angular/material/sort";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { publishedGame } from 'app/Model/publishedGame';

@Component({
  selector: 'app-gamelist-page',
  templateUrl: './gamelist-page.component.html',
  styleUrls: ['./gamelist-page.component.css']
})
export class GamelistPageComponent implements OnInit {
  
  columnsToDisplay = ['Game Name', 'User', 'Number of Plays'];
  datasource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http:HttpClient, private rout: Router) { }

  ngOnInit(): void {
    this.getgamelist()
  }
  goToDetails(row: any){
   // this.rout.navigate(['game'+ "?id=" +row.game_id]);
    this.rout.navigate(
      ['/game'],
      { queryParams: { id: row.game_id } }
    );
  
  }

  getgamelist(){
    this.http.get<Array<publishedGame>>("https://projectplutonium.azurewebsites.net/publishedGames/all/")
    .subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
       this.datasource.sort = this.sort;

})
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }



}

