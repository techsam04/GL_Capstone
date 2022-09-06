import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  items: any;
  flag: boolean=false;
  msg: string='';
  discountAmount: number=0;
  finalAmount: number = 0;
  hasError:any;

  constructor( private cartService : CartService , public cs:CouponService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
    this.grandTotal= this.cartService. getTotalPrice();
    
  
    })
  }

  onKeyUp(coupon:string) {
    this.cs.checkCouponCode(coupon).subscribe(res => {
      console.log();
      this.hasError = res; 
      if(res.length==0){
        this.msg = "Sorry Coupon not found";
        this.flag=false
      }   
      else{
        this.discountAmount = res[0]['value'];
        this.msg="Coupon Code Added";
        this.flag=true
        
      }
 });
   
  }

}
