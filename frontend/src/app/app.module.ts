import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { FilterPipe } from './shared/filter.pipe';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CouponComponent } from './coupon/coupon.component';
import { UploadComponent } from './upload/upload.component';
import { StockComponent } from './stock/stock.component';

//import { MyPipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ECommerceComponent,
     UsersComponent,
     HeaderComponent,
     CartComponent,
     ProductsComponent,
     AdminComponent,
     FilterPipe,
     PaymentComponent,
     CheckoutComponent,
     UserloginComponent,
     UserregisterComponent,
     AdminloginComponent,
     AdminsignupComponent,
     CouponComponent,
     UploadComponent,
     StockComponent,
    //MyPipe           //provide  details in declaration section for pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
