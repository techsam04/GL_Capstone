import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  fileUploadUrl="http://localhost:9090/product/upload";
  file:any;
  
  
    constructor(private router:Router,private _http:HttpClient) { } //DI for Service class
  
    //it is a life cycle or hook of component it will call after constructor
    //it call only one time
  
    ngOnInit(): void {
      if(sessionStorage.getItem('token')!=null && sessionStorage.getItem('isLoggedIn')=='admin'){        
      }
      else{
        this.router.navigate(['/adminlogin']);
     }
  }
  
  selectFile(event: any){
    this.file = event.target.files[0];
console.log(this.file);
  }
    
  uploadFile(){
    let formData = new FormData()
    console.log(formData);
    formData.append('file',this.file)
    this._http.post(this.fileUploadUrl,formData).subscribe(
      (data)=>{
        alert("Data Inserted To DataBase");
        this.router.navigate(['/ecommerce']);
      },
      (error)=>{
        alert("Something Went Wrong");
      
      })
  }
  
  
  }
  