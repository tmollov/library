import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainPageComponent } from './components/pages/admin-main-page/admin-main-page.component';
import { HomePageComponent } from './components/pages/home/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterAdminComponent } from './components/pages/registerAdmin/register-admin.component';
import { RegisterUserComponent } from './components/pages/registerUser/register-user.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent
  },
  {
    path: 'registerAdmin',
    component: RegisterAdminComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    component: AdminMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
