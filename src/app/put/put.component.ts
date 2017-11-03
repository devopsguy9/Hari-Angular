import { environment } from './../../environments/environment.prod';
import { Useradd } from './../entities/useradd';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent  {
  
  user = new Useradd();
  dem : any = {};
  data: any = {};
  obj : any;
  vr : any;
  url = environment.api;
  constructor(private http:HttpClient) { 
 

  }


  addUser(dat){
    
   this.dem.data = dat;
   this.dem.data.salt = "kfakff";
   this.dem.data.active = false;
   this.dem.data.id = null;
    console.log(this.user);
    console.log(dat);
    console.log(this.dem);
   
    
   return this.http.put(this.url+"user/",this.dem).subscribe(
     response => { 
     
       console.log(response);
      
     }
   )
  }
}
