import { Component, OnInit } from '@angular/core';
import { Event_type } from 'src/app/Event_type';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Event_details } from 'src/app/Event_details';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  event_type:Event_type;
  li:any;
  event_details: Event_details[] = [];

  constructor(private http : HttpClient,private route: ActivatedRoute) { 
    
    this.event_type={
      event_cat:'All_Events',
      event_sub_cat:'Upcoming',
      tag_list:''
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.event_type.event_cat=params['event_category']; 
        this.event_type.event_sub_cat=params['event_sub_category'];
        this.event_type.tag_list=params['tag_list'];
        console.log(this.event_type); 

        console.log(this.event_type.event_cat); 
        console.log(this.event_type.event_sub_cat);
        console.log(this.event_type.tag_list);  

        let url;
        if(this.event_type.tag_list==undefined)
          url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list=";
        else
          url="http://localhost:3000/api/v1/events?event_category="+this.event_type.event_cat+"&event_sub_category="+this.event_type.event_sub_cat+"&tag_list="+this.event_type.tag_list;

        // let url="http://localhost:3000/api/v1/events?event_category=All_Events&event_sub_category=Upcoming";
          this.http.get(url).subscribe(Response => {
            console.log(Response)
            this.li=Response;
            this.event_details=this.li;
            console.log(this.event_details);
          });    
      }
    );
  }
}