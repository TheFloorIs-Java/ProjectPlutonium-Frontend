import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponentComponent } from './pages/admin-page-component/admin-page-component.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LeaderBoardComponent } from './pages/leader-board/leader-board.component';
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { GamelistPageComponent } from './pages/gamelist-page/gamelist-page.component'


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponentComponent},
  {path: 'game', component: GamePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'gamelist', component: GamelistPageComponent},
  {path: 'admin', component: AdminPageComponentComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'profile/:username', component: ProfilePageComponent},
  {path: 'game?id=:game_id', component: GamelistPageComponent},
  {path: 'leaderboard', component: LeaderBoardComponent},
  {path: 'create', component: CreatePageComponent},
  {path: '**', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
