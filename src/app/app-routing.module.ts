import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MainComponent } from './MyComponents/main/main.component';
import { SignupComponent } from './MyComponents/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'events',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
