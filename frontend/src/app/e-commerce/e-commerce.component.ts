import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
products:Array<Product>=[];
storeMsg:string=""
deleteMsg:string=""
updateMsg:string=""
flag:boolean=false;
pid:number=0;
price:number=0;
dd:Date=new Date();
  constructor(public pser:ProductService) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts():void{
    //console.log("Event Fired")
    this.pser.loadProductDetails().subscribe(res=>this.products=res);
  }

  storeProduct(productRef:NgForm){
   // console.log(productRef.value);
  this.pser.storeProductDetails(productRef.value).
  subscribe(res=>this.storeMsg=res,error=>console.log(error),()=>this.loadProducts());
  }

  deleteProduct(pid:number){
    this.pser.deleteProductDetails(pid).
    subscribe(res=>this.deleteMsg=res,error=>console.log(error),()=>this.loadProducts())
    alert('Product Deleted Succesfully');
  }


updateProduct(product:Product){
  console.log(product);
  this.flag=true;
  this.pid=product.pid;
  this.price=product.price;
}

updateProductPrice(){
  let product = {"pid":this.pid,"price":this.price}
  //console.log(product);
  this.pser.updateProductInfo(product).subscribe(result=>this.updateMsg=result,error=>console.log(error),
  ()=>{
    alert('Product Updated Succesfully');
    this.loadProducts
    this.flag=false;
 })
}
}
