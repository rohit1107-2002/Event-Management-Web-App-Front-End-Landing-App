import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Event_type } from 'src/app/Event_type';


@Component({
  selector: 'app-event-sub-categ',
  templateUrl: './event-sub-categ.component.html',
  styleUrls: ['./event-sub-categ.component.css']
})
export class EventSubCategComponent implements OnInit {

  event_sub_category:string 
  @Input() event_type: Event_type = new Event_type;
  
  constructor(private router:Router) { 
     this.event_sub_category='Upcoming'
  }

  ngOnInit(): void {
  }

  onClick(s:string)
  {
    this.event_sub_category=s;
    console.log(this.event_sub_category);
    this.router.navigateByUrl("/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_sub_category);
  }

}
