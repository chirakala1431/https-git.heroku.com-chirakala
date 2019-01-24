import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    cartdata:object[]=[]
    meddata:object[]=[]
    constructor(private http:HttpClient)
    {
    
    }
  adminData(v)
  {
    this.meddata.push(v);
    console.log(this.meddata)
  }

  userData()
  {
   return this.meddata;
   
  }

  cartDetails(v)
  {
    this.cartdata.push(v);
    
  }

  cartReturn()
  {
    return this.cartdata;
  }

  userData1():Observable<any>
  {
    return this.http.get<any>("assets/userdata.json");
  }

  userDetails():Observable<any>
  {
    return this.http.get<any>("assets/userdetails.json")
  }

  adminTrans():Observable<any>
  {
    return this.http.get<any>("assets/admintrans.json")
  }
  
}
