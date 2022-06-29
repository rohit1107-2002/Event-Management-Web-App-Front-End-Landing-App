import { Component, OnInit } from '@angular/core';
import { Event_type } from 'src/app/Event_type';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  event_type:Event_type;
  li:any;
  lis=[];
  constructor(private http : HttpClient) { 
    
    this.event_type={
      event_cat:'All_Events',
      event_sub_cat:'Upcoming',
      tag_list:''
    }

  }

  ngOnInit(): void {
    let url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;
    this.http.get(url).subscribe(Response => {
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
  }

  add_event_cat(s:string)
  {
      this.event_type.event_cat=s;
      console.log(this.event_type.event_cat);
      let url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;
      this.http.get(url).subscribe(Response => {
        console.log(Response)
        this.li=Response;
        this.lis=this.li.list;
      });
  }

  add_event_sub_cat(s:string)
  {
      this.event_type.event_sub_cat=s;
      console.log(this.event_type.event_sub_cat);
      let url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;
      this.http.get(url).subscribe(Response => {
        console.log(Response)
        this.li=Response;
        this.lis=this.li.list;
      });
  }

  add_tag_l(s:string)
  {
      this.event_type.tag_list=s;
      console.log(this.event_type.tag_list);
      let url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;
      this.http.get(url).subscribe(Response => {
        console.log(Response)
        this.li=Response;
        this.lis=this.li.list;
      });
  }

}
 