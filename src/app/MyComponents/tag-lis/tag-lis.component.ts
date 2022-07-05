import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Event_type } from 'src/app/Event_type';

@Component({
  selector: 'app-tag-lis',
  templateUrl: './tag-lis.component.html',
  styleUrls: ['./tag-lis.component.css']
})
export class TagLisComponent implements OnInit {

  tag:string
  @Input() event_type: Event_type = new Event_type;

  constructor(private router:Router) { 
    this.tag="";
  }

  ngOnInit(): void {
  }

  onClick(s:string)
  {
    if(this.tag==s)
      this.tag="";
    else
      this.tag=s;
    console.log(this.tag);
    this.router.navigateByUrl("/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.tag);
  }
} 
