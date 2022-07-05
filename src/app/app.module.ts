import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { MainComponent } from './MyComponents/main/main.component';
import { EventCategComponent } from './MyComponents/event-categ/event-categ.component';
import { EventSubCategComponent } from './MyComponents/event-sub-categ/event-sub-categ.component';
import { EventDisplayComponent } from './MyComponents/event-display/event-display.component';
import { EventItemComponent } from './MyComponents/event-item/event-item.component';
import { TagLisComponent } from './MyComponents/tag-lis/tag-lis.component';
import { HomeComponent } from './MyComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    EventCategComponent,
    EventSubCategComponent,
    EventDisplayComponent,
    EventItemComponent,
    TagLisComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
