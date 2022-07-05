import { Component,Input,OnInit } from '@angular/core';
import { Event_details } from 'src/app/Event_details';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  @Input() detail: Event_details = new Event_details;
  date:any;

  constructor() {  
  }

  ngOnInit(): void {
    console.log(this.detail.reg_et)
    this.date = new Date(this.detail.reg_et).toLocaleString("en-us")
    console.log(this.date)
  }
} 
