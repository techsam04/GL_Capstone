import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number=0;
  public searchTerm : string='';
  totalWishlistItem: number=0;
  products: any;
  title = '';
  constructor(private cartService : CartService,private wishlistService:WishlistService,private pservice:ProductService ,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      
    })
    this.wishlistService.getProducts()
    .subscribe((res: string | any[])=>{
      this.totalWishlistItem = res.length;
    })
  }
  logout(){
    if(sessionStorage.getItem('isLoggedIn')=='admin'){
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('token');
      this.router.navigate(['/products']);
    }
    else{
      sessionStorage.removeItem('token');
  alert('You are logout from the system');
  this.router.navigate(['/products']);
    }
  
  }
  loggedIn(){
    return sessionStorage.getItem('token');
  }

  // searchTitle() {
  //   this.pservice.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.products = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
searchPosts($event:any){
  if($event.keyCode === 13){
    $event.preventDefault();
   console.log($event.target.parentElement.submit());
    console.log('inyfufufufu')
  }
}
}
