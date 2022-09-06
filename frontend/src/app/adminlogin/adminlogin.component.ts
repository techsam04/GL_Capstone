import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admins:Array<Admin>=[];
  storeMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
  dd:Date=new Date();
  
    constructor(public pser:AdminService, private router:Router) { } //DI for Service class
  
    //it is a life cycle or hook of component it will call after constructor
    //it call only one time
  
    ngOnInit(): void {
      if(sessionStorage.getItem('token')!=null && sessionStorage.getItem('isLoggedIn')=='admin'){
        this.loadAdmin();
        this.router.navigate(['/users']);
        
      }
    }
  
    loadAdmin():void{
      //console.log("Event Fired")
      this.pser.loadAdminDetails().subscribe(res=>this.admins=res);
    }
    
   loginAdmin(admin:Admin){
    console.log(admin);
    this.flag=true;
    this.email=admin.email;
    this.password=admin.password;
  }
    loginAdminInfo(){
      let admin = {"email":this.email,"password":this.password}
      this.pser.loginAdminDetails(admin).subscribe(res=>this.loginMsg=res,error=> console.log(error),
      ()=>{
        if(this.loginMsg=='true'){
          alert('Logged In Succesfully');
          const email = (this.email);
        console.log(email);
        sessionStorage.setItem("isLoggedIn","admin");
        sessionStorage.setItem('token',email);
          this.router.navigate(['/users']);
        }
        else if(this.loginMsg=='false'){
          alert('Incorrect Credentails');
        }
        else{
          alert('Data Not Found Please Register Yourself');
          this.router.navigate(['/adminsignup']);
        }
        this.loadAdmin
        console.log(this.flag);
     })
    } 

    
  }
  
