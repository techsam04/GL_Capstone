import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  loginUserDetails: Users;
  users:Array<Users>=[];
  storeMsg:string=""
  deleteMsg:string=""
  updateMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
 

  
  constructor( public pser:UsersService, private router: Router) { 
    this.loginUserDetails = {'password': '', 'email': '' };
    
  }

  
  

  ngOnInit(): void {
    this.loadUsers() 
  }

  
  loadUsers():void{
    //console.log("Event Fired")
    this.pser.loadUserDetails().subscribe(res=>this.users=res);
  }
  storeUser(userRef:NgForm){
    this.pser.storeUserDetails(userRef.value).
    subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadUsers());
    }

loginUser(user:Users){
  console.log(user);
  this.flag=true;
  this.email=user.email;
  this.password=user.password;
  
}
  loginUserInfo(userRef:NgForm){
    console.log(userRef.value);
    console.log('insidie logininfo');
    let redirectTo = localStorage.getItem('redirectTo');
    let user = {"email":this.email,"password":this.password}
    console.log(userRef.value);
    console.log('insidie logininfo');
    this.pser.loginUserDetails(user).subscribe(res=> this.loginMsg=res, error=> console.log(error),
    ()=>{
      if(this.loginMsg=='true'){
        alert('Logged In Succesfully');
        const email = (userRef.value.email);
        console.log(email);
        sessionStorage.setItem("isLoggedIn","true");
        sessionStorage.setItem('token',email);
        this.router.navigate(['/products']);
      }
      else if(this.loginMsg=='false'){
        alert('Incorrect Credentails');
      }
      else{
        alert('Data Not Found Please Register Yourself');
        this.router.navigate(['/userregister']);
      }
      this.loadUsers
      this.flag=false;
   })
  }
}
