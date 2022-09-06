import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coupon } from './coupon';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  
  //userURL: any = environment.userURL;


  constructor(public http:HttpClient) {
   
   }
   
  loadCouponDetails():Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:9090/Coupon/displayCoupon")
}  
storeCouponDetails(coupon:Coupon):Observable<string>{
  return this.http.post("http://localhost:9090/Coupon/addCoupon",coupon,{responseType:'text'})
}
deleteCouponDetails(id:number):Observable<string>{
  return this.http.delete("http://localhost:9090/Coupon/deleteCoupon/"+id,{responseType:'text'});
}
updateCouponDetails(coupon:any):Observable<string>{
 return this.http.patch("http://localhost:9090/Coupon/updateCoupon",coupon,{responseType:'text'})
}
checkCouponCode(code:string):Observable<Coupon[]>{
  return this.http.get<Coupon[]>("http://localhost:9090/Coupon/checkCoupon/"+code);
}
}
