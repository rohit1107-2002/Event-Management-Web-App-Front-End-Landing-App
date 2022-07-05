import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Event_type } from 'src/app/Event_type';


@Component({
  selector: 'app-event-categ',
  templateUrl: './event-categ.component.html',
  styleUrls: ['./event-categ.component.css']
})
export class EventCategComponent implements OnInit {

  event_category:string 
  @Input() event_type: Event_type = new Event_type;


  constructor(private router:Router) { 
    this.event_category='All_Events'
  }

  ngOnInit(): void {
  }

  onClick(s:string)
  {
    this.event_category=s;
    console.log(this.event_category);    
    this.router.navigateByUrl("/events?event_category="+this.event_category+"&event_sub_category=Upcoming");
  }

} 
