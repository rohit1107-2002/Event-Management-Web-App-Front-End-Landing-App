import { Component,Input,OnInit } from '@angular/core';
import { Event_details } from 'src/app/Event_details';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Event_type } from 'src/app/Event_type';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  @Input() detail: Event_details = new Event_details;
  @Input() event_type: Event_type = new Event_type;

  date:any;
  localItem1:string | null;
  localItem2:string | null;
  token:string
  size: number
  userid:number
  data:any

  constructor(private http : HttpClient,private router:Router) { 
    this.localItem1=localStorage.getItem('token');
    this.localItem2=localStorage.getItem('user_id');
    if(this.localItem1==null ||this.localItem2==null )
    {
      this.token="";
      this.userid=0;
      alert('Login to see events');
      this.router.navigateByUrl("/login");
    }
    else
    {
      this.token=this.localItem1;
      this.userid=Number(this.localItem2);
    } 
    this.size=0;
  }

  ngOnInit(): void {
    console.log(this.detail.reg_et)
    this.date = new Date(this.detail.reg_et).toLocaleString("en-us")
    console.log(this.date)

    const headers = new HttpHeaders({ 'Authorization': this.token })
    let url="http://localhost:3000/api/v1/registration/check?event_id="+this.detail.id+"&user_id="+this.userid;
      this.http.get<any>(url,{headers}).subscribe(Response => {
        console.log(Response)
        this.size=Response.length;
      });  
  }

  register()
  {
      let headers = new HttpHeaders({ 'Authorization': this.token })
      let options = { headers: headers };
      this.data= {
        "event_id":this.detail.id,
        "user_id":this.userid
        }
      this.http.post('http://localhost:3000/api/v1/registration/register',this.data,options).subscribe(
        res =>{
            console.log(res);
            this.reloadCurrentPage()
        },
        err => {
            console.log(err.message);
        }
    );
  }
  reloadCurrentPage() {
    window.location.reload();
   }
} 
