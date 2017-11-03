import { FilterPipe } from './../userfilter';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GetComponent',
})

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

   
  vr: any;
  dataarr : any = {};
  datas : any = {};
   url = environment.api;
   sdata : any;
  
  constructor(private http:HttpClient) { 
     this.getdata();
    
  }

  getdata(){

    return this.http.post(this.url+"user/",[]).subscribe(
      d => { 
    this.vr  = d;
    this.dataarr = this.vr.data;
        console.log(this.vr);
        console.log(this.dataarr);
        
      }
    )
  }

  senddata(){
   this.sdata = this.dataarr;
   console.log(this.sdata);
   return this.sdata;

  }
 

}
