import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins:Array<Admin>=[];
  storeMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
  dd:Date=new Date();
  
    constructor(public pser:AdminService) { } //DI for Service class
  
    //it is a life cycle or hook of component it will call after constructor
    //it call only one time
  
    ngOnInit(): void {
      this.loadAdmin();
    }
  
    loadAdmin():void{
      //console.log("Event Fired")
      this.pser.loadAdminDetails().subscribe(res=>this.admins=res);
    }
    
  /* loginAdmin(admin:Admin){
    console.log(admin);
    this.flag=true;
    this.email=admin.email;
    this.password=admin.password;
  }
    loginAdminInfo(){
      let admin = {"email":this.email,"password":this.password}
      this.pser.loginAdminDetails(admin).subscribe(res=>this.loginMsg=res,error=> console.log(error),
      ()=>{
        this.loadAdmin
        this.flag=false;
     })
    }  */

   /* loginUser(userRef:NgForm){
      // console.log(userRef.value);
     this.pser.loginUserDetails(userRef.value).
     subscribe(res=>this.loginMsg=res,error=>console.log(error),()=>this.loadUsers());
     } */
    logoutAdmin(email:string){
      //console.log("Event Fired")
      this.pser.logoutAdminDetails(email).subscribe(res=>this.logoutMsg=res,error=>console.log(error),()=>this.loadAdmin());
    }
  
    storeAdmin(adminRef:NgForm){
     // console.log(userRef.value);
    this.pser.storeAdminDetails(adminRef.value).
    subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadAdmin());
    }
  
    
  }
  
