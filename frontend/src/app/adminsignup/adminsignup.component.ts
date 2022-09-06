import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  admins:Array<Admin>=[];
  storeMsg:string=""
  loginMsg:string=""
  logoutMsg:string=""
  flag:boolean=false;
  email:string="";
  password:string="";
  dd:Date=new Date();
  signUpForm!: FormGroup;
  isSubmitted:boolean=false;

  constructor(public pser:AdminService,private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loadAdmin();
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

  loadAdmin():void{
    //console.log("Event Fired")
    this.pser.loadAdminDetails().subscribe(res=>this.admins=res);
  }
  

  storeAdmin(){
    console.log("inside onsubmit")
    this.isSubmitted=true;
   
    console.log(this.signUpForm.controls['errors']);
      if (this.signUpForm.invalid) {
  
         return;
      }
      else{
    console.log(this.signUpForm.value);
   this.pser.storeAdminDetails(this.signUpForm.value).
   subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadAdmin());
   }
  }
}
