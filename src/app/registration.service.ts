import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  reg1:object[]=[];
  constructor(private http:HttpClient,private router:Router) { }
  regData(v)
  {
    this.reg1.push(v);
    this.http.post('home/sign',v).subscribe(temp=>{alert(temp)
      console.log(temp);
    if(temp=="register successfully")
  {
    this.router.navigate(['/home/log']);
  }
  else if(temp=="user already exsisted")
  {
    this.router.navigate(['/home/sign']);
  }
});
  }


}
