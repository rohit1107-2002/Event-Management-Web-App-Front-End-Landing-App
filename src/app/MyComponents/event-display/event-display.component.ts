import { Component, Input, OnInit } from '@angular/core';
import { Event_type } from 'src/app/Event_type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  @Input() event_type: Event_type = new Event_type;
  li:any;
  lis=[];
  constructor(private http : HttpClient) { 
    
  }

  ngOnInit(): void {
    let url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;
    this.http.get(url).subscribe(Response => {
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
  }
} 
