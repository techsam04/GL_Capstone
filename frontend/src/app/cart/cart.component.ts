import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  //public finalTotal !: number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;
    this.grandTotal= this.cartService. getTotalPrice();
  
    })
  }
removeItem(product: any){
this.cartService.removeCartItem(product);
}
emptycart(){
  this.cartService.removeAllCart();
}
updatecart(){
  this.grandTotal= this.cartService. getTotalPrice();
  this.grandTotal=this.grandTotal;
}
inc(product:any){
//console.log(product);
//if(product.quantity!=5){
  //product.quantity += 1;
  product.quantity += 1;
}
des(product:any){
 if(product.quantity!=1){
   product.quantity -= 1;
 }
  //product.quantity -= 1;
}

}

