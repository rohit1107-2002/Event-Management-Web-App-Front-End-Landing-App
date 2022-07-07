import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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

  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    this.router.navigateByUrl("/");
  }

}
 