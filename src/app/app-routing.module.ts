import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MainComponent } from './MyComponents/main/main.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'events',component:MainComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
