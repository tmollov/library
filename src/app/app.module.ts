import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminMainPageComponent } from './components/pages/admin-main-page/admin-main-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterUserComponent } from './components/pages/registerUser/register-user.component';
import { RegisterAdminComponent } from './components/pages/registerAdmin/register-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterUserComponent,
    NavComponent,
    AdminMainPageComponent,
    RegisterUserComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
