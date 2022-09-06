import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  users:Array<Users>=[];
  isSubmitted:boolean=false;
  storeMsg:string=""
  deleteMsg:string=""
  updateMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
  username:string="";
  phone:string="";
  dd:Date=new Date();
  signUpForm!: FormGroup;

  constructor(public pser:UsersService,private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loadUsers();
    this.signUpForm=this.formBuilder.group({
      username:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$")]],
      phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }
  get formControls(){
    return this.signUpForm.controls;
}
  loadUsers():void{
    //console.log("Event Fired")
    this.pser.loadUserDetails().subscribe(res=>this.users=res);
  }

  storeUser(){
    console.log("inside onsubmit")
    this.isSubmitted=true;
   
    console.log(this.signUpForm.controls['errors']);
      if (this.signUpForm.invalid) {
         return;
      }
      else{
    console.log(this.signUpForm.value);
   this.pser.storeUserDetails(this.signUpForm.value).
   subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadUsers());
   }
  }
}
