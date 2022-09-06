import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-users',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  coupon:Array<Coupon>=[];
  storeMsg:string=""
  deleteMsg:string=""
  updateMsg:string=""
  flag:boolean=false;
  name:string="";
  description:string="";
  value:number | undefined
  CouponForm!: FormGroup;
  id: number | undefined;
  
    constructor(public cs:CouponService,private router:Router) { } //DI for Service class
  
    //it is a life cycle or hook of component it will call after constructor
    //it call only one time
  
    ngOnInit(): void {
      if(sessionStorage.getItem('token')!=null && sessionStorage.getItem('isLoggedIn')=='admin'){
        this.loadCoupon();
        
      }
      else{
        this.router.navigate(['/adminlogin']);
     }
  }
  
    loadCoupon():void{
      //console.log("Event Fired");
      this.cs.loadCouponDetails().subscribe(res=>this.coupon=res);
    }
    
  
    storeCoupon(couponRef:NgForm){
      console.log(couponRef.value);
     // console.log(userRef.value);
    this.cs.storeCouponDetails(couponRef.value).
    subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadCoupon());
    }
  
    deleteCoupon(id:number){
      //console.log(email);
      this.cs.deleteCouponDetails(id).
      subscribe(res=>this.deleteMsg=res,error=>console.log(error),()=>this.loadCoupon())
      alert('Coupon Deleted Succesfully');
    }
  
  
  updateCoupon(coupon:Coupon){
    this.flag=true;
    this.id=coupon.id;
    this.value=coupon.value;
  }
  
  updateCouponInfo(){
    let coupon = {"id":this.id,"value":this.value}
    //console.log(product);
    this.cs.updateCouponDetails(coupon).subscribe(result=>this.updateMsg=result,error=>console.log(error),
    ()=>{
      this.loadCoupon
      this.flag=false;
   })
   alert('Coupon Updated Succesfully');
   location.reload();
  }
  }
  