import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { template } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaService {

  constructor(private http:HttpClient) { }

  sendPharmaData(v)
  {
    this.http.post('client/pharma',v).subscribe(temp=>alert(temp));
  }

  receivePharmaData():Observable<any>
  {
    return this.http.get('client/cart')
  }

}
