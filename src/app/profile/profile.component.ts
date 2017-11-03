import { GetComponent } from './../get/get.component';
import { Hel } from '/Users/dlacademy/Desktop/angular/src/app/users.service';
import { Register } from './profile.componentstr';
import { Component, OnInit ,EventEmitter ,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [Hel]
})
export class ProfileComponent  {


  
  @Output() messageevent = new EventEmitter<any>();
  users:Array<Register>;
  vr:any;
  constructor(private helservice:Hel ,private http : HttpClient){
    this.users = [];
   
  }
  

addUser(name:string,mobile:number,location:string,qualification:string,organisation:string){
  let user=new Register();
  this.users.push(user);
   //console.log(this.users);
// this.messageevent.emit(user);

   this.helservice.helux(name);
    this.helservice.setdata(user);
    
       

}



}
