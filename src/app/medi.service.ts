import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediService {

  constructor(private http:HttpClient) { }
  data:any[]=[];
  medData(v)
  {
    this.http.post('admin/medicine',v).subscribe(temp=>{alert(temp)})
  }

  sendEditData1(v)
  {
    this.http.put('admin/medicine',v).subscribe();
    console.log(v);
  }

  sendMedData():Observable<any>
  {
    return this.http.get<any>('admin/stock') 
  }

  sendMedData1():Observable<any>
  {
    return this.http.get<any>('admin/medicine')
  }

  delete1(v):Observable<any>
  {
    var httpOptions={
      headers:new HttpHeaders({'content-Type':"application/json"}),
      body:v
    };
   return this.http.delete<any>('admin/medicine',httpOptions)
  }

}
