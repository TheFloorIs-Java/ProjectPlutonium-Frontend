import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import { AdminPageComponentComponent } from './pages/admin-page-component/admin-page-component.component';
import { LoginFormComponentComponent } from './component/login-form-component/login-form-component.component';
import { ViewAllUsersComponentComponent } from './component/view-all-users-component/view-all-users-component.component';
import { DeleteUserComponentComponent } from './component/delete-user-component/delete-user-component.component';
import { PutUserComponentComponent } from './component/put-user-component/put-user-component.component';
import { RegisterUserComponentComponent } from './component/register-user-component/register-user-component.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';
import { GameInfoComponent } from './component/game-info/game-info.component';
import { HangmanGameComponentComponent } from './component/hangman-game-component/hangman-game-component.component';
import { FormsModule } from '@angular/forms';
import { ZombieGameComponent } from './component/zombie-game/zombie-game.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileInfoComponent } from './component/profile-info/profile-info.component';
import { ProfileStatsComponent } from './component/profile-stats/profile-stats.component';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AdventureBuilderComponent } from './component/adventure-builder/adventure-builder.component';
import { UserService } from './service/user.service';
import { ProfileGamesCreatedComponent } from './component/profile-games-created/profile-games-created.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { SubmitGameOTDComponent } from './component/submit-game-otd/submit-game-otd.component';
import { ProfileGamesPlayedComponent } from './component/profile-games-played/profile-games-played.component';

import { GamelistPageComponent } from './pages/gamelist-page/gamelist-page.component';
import { GamelisterComponent } from './component/gamelister/gamelister.component';
//import { GameListComponent } from './pages/gameList-page/game-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
//import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { HttpTestingController } from '@angular/common/http/testing';
//import { RouterTestingModule } from '@angular/router/testing';
//import { LoginFormComponentComponent } from './component/login-form-component/login-form-component.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponentComponent,
    AdminPageComponentComponent,
    LoginFormComponentComponent,
    ViewAllUsersComponentComponent,
    DeleteUserComponentComponent,
    PutUserComponentComponent,
    RegisterUserComponentComponent,
    HomePageComponent,
    NavbarComponentComponent,
    GameInfoComponent,
    HangmanGameComponentComponent,
    ZombieGameComponent,
    ProfilePageComponent,
    ProfileInfoComponent,
    ProfileStatsComponent,
    LeaderBoardComponent,
    CreatePageComponent,
    AdventureBuilderComponent,
    ProfileGamesCreatedComponent,
    GamePageComponent,
    SubmitGameOTDComponent,
    
    GamelistPageComponent,
          GamelisterComponent,
    //GameListComponent,
    GamePageComponent,
    ProfileGamesPlayedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
    //HttpClientTestingModule,
    //RouterTestingModule
  ],
  providers: [
    UserService,
    CookieService,
    DatePipe,
    HttpClient,
    HttpClientModule,
    HttpResponse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
