import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

const baseUrl = 'http://localhost:9090/product/';
@Injectable({
  providedIn: 'root'//giving the information  in providers attribute in app.module.ts
})
export class ProductService {
  msg: any;

  constructor(public http:HttpClient) { } //DI for HttpClient API

 // loadProductDetails(){
     // console.log("Service Called...")
      //this.http.get("http://localhost:9090/product/getAllProduct").
      //subscribe(res=>console.log(res),error=>console.log(error),()=>console.log("Completed"));
 // }
 loadProductDetails():Observable<Product[]>{
     return this.http.get<Product[]>("http://localhost:9090/product/getAllProduct")
 }
 storeProductDetails(product:Product):Observable<string>{
   return this.http.post("http://localhost:9090/product/storeProduct",product,{responseType:'text'})
 }
 deleteProductDetails(pid:number):Observable<string>{
   return this.http.delete("http://localhost:9090/product/deleteProduct/"+pid,{responseType:'text'});
 }
 updateProductInfo(product:any):Observable<string>{
  return this.http.patch("http://localhost:9090/product/updateProduct",product,{responseType:'text'})
}

searchItem(item:string):Observable<Product[]>{
  return this.http.get<Product[]>("http://localhost:9090/product/findProduct/"+item)
}
}
