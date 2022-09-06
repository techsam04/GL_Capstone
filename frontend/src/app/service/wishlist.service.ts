import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public cartItemList : any = []
  public  productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  //grandTotal:Subject <number>= new BehaviorSubject<number>(0);
   grandTotal = 0;
  // finalTotal=0;

  constructor() { }
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
  addToWishlist(product : any){
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
  getTotalPrice() {
    throw new Error('Method not implemented.');
  }
}
