import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:object;
  constructor(private http:HttpClient) { }
  logData(v)
  {
    this.data=v;
    return this.http.post('home/log',v);
    
  }
  sendPharma()  
  {
    return this.data;
  }
}
