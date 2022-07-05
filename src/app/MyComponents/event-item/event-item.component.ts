import { Component, Input, OnInit } from '@angular/core';
import { Event_details } from 'src/app/Event_details';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() detail: Event_details = new Event_details;
  date:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.detail.reg_et)
    this.date = new Date(this.detail.reg_et).toLocaleString("en-us")
    console.log(this.date)
  }

}
 