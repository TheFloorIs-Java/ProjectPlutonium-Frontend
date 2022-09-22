import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponentComponent } from './pages/admin-page-component/admin-page-component.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponentComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'admin', component: AdminPageComponentComponent},
  {path: '**', component: HomePageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
