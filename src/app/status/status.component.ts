import { ProfileComponent } from './../profile/profile.component';
import { Hel } from '/Users/dlacademy/Desktop/angular/src/app/users.service';
import { Component, OnInit ,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [Hel]
})

// export class Demo{
//   status: string;
//   age: number;
//   designation: string;
// }

export class StatusComponent  {


  
  message : any;
  private subscription : Subscription;
  constructor(private helservice:Hel){
   this.subscription = this.helservice.getdata().subscribe(message => { this.message = message; });
   console.log(this.message);
  
  }

  status: string = "";
  age: number = null;
  designation: string = "";

}
