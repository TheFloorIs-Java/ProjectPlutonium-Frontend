import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { RulesComponent } from './pages/rules/rules.component';


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
    RulesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
