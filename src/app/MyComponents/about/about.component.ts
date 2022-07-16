import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  token: string | null 
  localItem:string | null;
  constructor(private router:Router) {
    this.localItem=window.localStorage.getItem('token');
    if(this.localItem==null)
    {
      this.token=null;
    }
    else
    {
      this.token=this.localItem;
    }
   }

  ngOnInit(): void {
    this.localItem=window.localStorage.getItem('token');
    if(this.localItem==null)
    {
      this.token=null;
    }
    else
    {
      this.token=this.localItem;
    }
  }

  proceed()
  {
    this.router.navigateByUrl("/events?event_category=All_Events&event_sub_category=Upcoming");
  }

}
