import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartItemList : any = []
  public  productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  //grandTotal:Subject <number>= new BehaviorSubject<number>(0);
   grandTotal = 0;
  // finalTotal=0;
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
     if( product.pid=== a.pid){
       this.cartItemList.splice(index,1);
     }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  
  getTotalPrice() {
     this.grandTotal = 0 ;
    this.cartItemList.forEach((product:any) => {
    this.grandTotal += (product.quantity*product.price);
    //this.finalTotal+=this.grandTotal;
    })
    return this.grandTotal;
  }
  addtoCart(product : any){
    let productExists = false
    for(let i in this.cartItemList){
   if(this.cartItemList[i].productPid === product.pid){
      this.cartItemList[i].quantity++
      productExists = true;
      break;
    }}
    if(!productExists){
      this.cartItemList.push({
    productPid : product.pid,
    pname :product.pname,
    url :product.url,
     quantity:1 ,
     price: product.price,
     category:product.category
    })
    //this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
   this.getTotalPrice();
    }
  }

  
  }
  
  
   


