import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CouponComponent } from './coupon/coupon.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { UploadComponent } from './upload/upload.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'ecommerce',component:ECommerceComponent},
  {path:'users',component:UsersComponent},
  {path:'cart',component:CartComponent},
  {path:'products',component:ProductsComponent},
  {path:'admin',component:AdminComponent},
  {path:'payment',component:PaymentComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'coupon',component:CouponComponent},
  {path:'upload',component:UploadComponent},
  {path:'stock',component:StockComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
