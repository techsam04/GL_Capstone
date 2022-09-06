import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Array<Users>=[];
  storeMsg:string=""
  deleteMsg:string=""
  updateMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
  dd:Date=new Date();
  
    constructor(public pser:UsersService,private router:Router) { } //DI for Service class
  
    //it is a life cycle or hook of component it will call after constructor
    //it call only one time
  
    ngOnInit(): void {
      if(sessionStorage.getItem('token')!=null && sessionStorage.getItem('isLoggedIn')=='admin'){
        this.loadUsers();
        
      }
      else{
        this.router.navigate(['/adminlogin']);
     }
  }
  
    loadUsers():void{
      //console.log("Event Fired");
      this.pser.loadUserDetails().subscribe(res=>this.users=res);
    }
    
   /*loginUser(user:Users){
    console.log(user);
    this.flag=true;
    this.email=user.email;
    this.password=user.password;
  }
    loginUserInfo(){
      let user = {"email":this.email,"password":this.password}
      this.pser.loginUserDetails(user).subscribe(res=>this.loginMsg=res,error=> console.log(error),
      ()=>{
        this.loadUsers
        this.flag=false;
     })
    } */

   /* loginUser(userRef:NgForm){
      // console.log(userRef.value);
     this.pser.loginUserDetails(userRef.value).
     subscribe(res=>this.loginMsg=res,error=>console.log(error),()=>this.loadUsers());
     } */
    logoutUser(email:string){
      //console.log("Event Fired")
      this.pser.logoutUserDetails(email).subscribe(res=>this.logoutMsg=res,error=>console.log(error),()=>this.loadUsers());
    }
  
    storeUser(userRef:NgForm){
     // console.log(userRef.value);
    this.pser.storeUserDetails(userRef.value).
    subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadUsers());
    }
  
    deleteUser(email:string){
      //console.log(email);
      this.pser.deleteUserDetails(email).
      subscribe(res=>this.deleteMsg=res,error=>console.log(error),()=>this.loadUsers())
      alert('User Deleted Succesfully');
    }
  
  
  updateUser(user:Users){
    console.log(user);
    this.flag=true;
    this.email=user.email;
    this.password=user.password;
  }
  
  updateUserInfo(){
    let user = {"email":this.email,"password":this.password}
    //console.log(product);
    this.pser.updateUserDetails(user).subscribe(result=>this.updateMsg=result,error=>console.log(error),
    ()=>{
      this.loadUsers
      this.flag=false;
   })
   alert('User Updated Succesfully');
   location.reload();
  }
  }
  