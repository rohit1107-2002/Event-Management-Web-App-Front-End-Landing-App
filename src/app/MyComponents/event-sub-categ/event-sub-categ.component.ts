import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-sub-categ',
  templateUrl: './event-sub-categ.component.html',
  styleUrls: ['./event-sub-categ.component.css']
})
export class EventSubCategComponent implements OnInit {

  event_sub_category:string 
  @Output() event_sub_cat: EventEmitter<string>=new EventEmitter();
  
  constructor() { 
    this.event_sub_category='Upcoming'
  }

  ngOnInit(): void {
  }

  onClick(s:string)
  {
    this.event_sub_category=s;
    console.log(this.event_sub_category);
    this.event_sub_cat.emit(this.event_sub_category);
  }

}
