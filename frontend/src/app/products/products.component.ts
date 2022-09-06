import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';
import { WishlistService } from '../service/wishlist.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  public productList : any;
  public filterCategory:any
  searchKey:string="";
  text: string | undefined;
  msg: any;
  items: any;
  flag: boolean = false;
  constructor(private ps:ProductService,private api : ApiService,private cartService : CartService,private wishlistService : WishlistService,private router:Router) { }

  ngOnInit(): void {
this.api.getProduct()
  .subscribe(res=>{
    this.productList=res;
    this.filterCategory=res;

    this.productList.forEach((a:any)=>{
      if(a.category==='Jewellery'|| a.category==='Electonics' || a.category==='Mobiles' ){}
      Object.assign(a,{quantity:1,total:a.price});
    });
    console.log(this.productList);
  });
  this.cartService.search.subscribe((val:any)=>{
    this.searchKey=val;
  })
  this.flag = false
  }
addtocart(product: any){
  console.log(sessionStorage.getItem('token'))
  if(sessionStorage.getItem('token')==null){
    alert("Please login");
    this.router.navigate(['userlogin'])
  }
  else{
this.cartService.addtoCart(product);
  }
} 

addToWishlist(product: any){
  if(sessionStorage.getItem('token')==null){
    alert("Please login");
    this.router.navigate(['userlogin'])
  }
  else{
  this.wishlistService.addToWishlist(product);
  }
}

filter(category:string){
  this.filterCategory = this.productList.filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
      console.log('inside filer');
    }
  })
}
onKeyUp(x:any) {
  this.ps.searchItem(x.target.value).subscribe((res: any)=>this.items=res);
  console.log(this.items);
  this.flag=true;
}

}
