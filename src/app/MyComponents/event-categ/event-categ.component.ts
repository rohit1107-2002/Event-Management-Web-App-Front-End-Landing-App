import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-categ',
  templateUrl: './event-categ.component.html',
  styleUrls: ['./event-categ.component.css']
})
export class EventCategComponent implements OnInit {

  event_category:string 
  @Output() event_cat: EventEmitter<string>=new EventEmitter();
  
  constructor() { 
    this.event_category='All_Events'
  }

  ngOnInit(): void {
  }

  onClick(s:string)
  {
    this.event_category=s;
    console.log(this.event_category);
    this.event_cat.emit(this.event_category);
  }

} 
