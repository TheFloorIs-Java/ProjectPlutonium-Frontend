import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponentComponent } from './pages/login-page-component/login-page-component.component';
import { AdminPageComponentComponent } from './pages/admin-page-component/admin-page-component.component';
import { LoginFormComponentComponent } from './component/login-form-component/login-form-component.component';
import { ViewAllUsersComponentComponent } from './component/view-all-users-component/view-all-users-component.component';
import { DeleteUserComponentComponent } from './component/delete-user-component/delete-user-component.component';
import { PutUserComponentComponent } from './component/put-user-component/put-user-component.component';
import { RegisterUserComponentComponent } from './component/register-user-component/register-user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponentComponent,
    AdminPageComponentComponent,
    LoginFormComponentComponent,
    ViewAllUsersComponentComponent,
    DeleteUserComponentComponent,
    PutUserComponentComponent,
    RegisterUserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
