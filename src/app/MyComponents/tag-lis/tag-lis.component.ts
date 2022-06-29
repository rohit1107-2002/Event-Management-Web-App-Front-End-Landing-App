import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-lis',
  templateUrl: './tag-lis.component.html',
  styleUrls: ['./tag-lis.component.css']
})
export class TagLisComponent implements OnInit {

  tag:string
  @Output() tag_l: EventEmitter<string>=new EventEmitter();
  
  constructor() { 
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
    this.tag_l.emit(this.tag);
  }
} 
