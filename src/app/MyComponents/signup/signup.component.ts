import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // username:string | undefined
  email:string | undefined
  password:string | undefined

  constructor(private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.http.post<any>('http://localhost:3000/api/v1/clients', { email:this.email,password:this.password }).subscribe(data => {
        this.router.navigateByUrl("/login");
      },
      (error)=>{
        console.log(error)
        alert("Email already exists!")
      })
      
  }
}
 