import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string | undefined
  password:string | undefined

  constructor(private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post<any>('http://localhost:3000/api/v1/auth/login', { email:this.email,password:this.password }).subscribe(data => {
        console.log(data.token);
        window.localStorage['token']=data.token;
        window.localStorage['user_id']=data.user_id;
        this.router.navigateByUrl("/events?event_category=All_Events&event_sub_category=Upcoming");
        },
        (error)=>{
          console.log(error)
          alert("Invalid Email or Password")
        }
    )
}
}
 