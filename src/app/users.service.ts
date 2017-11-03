
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Hel {
    users:any;

 private sub:any = new BehaviorSubject<any>(null);

    helux(hari:string){
        console.log("service is working"+hari);
    }

    setdata(user:object){
        var copy;
this.sub.next({ users : user})
       console.log(user);
       
    console.log(this.users);
   
    

    //    user.forEach(function (value) {
    //     console.log(value);
    //   });
      
    
    
    }
    getdata(): Observable<any> {
    
        return this.sub.asObservable();
      
        }

 
 

}