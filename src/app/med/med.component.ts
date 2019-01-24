import { Component, OnInit } from '@angular/core';

import { MediService } from '../medi.service';

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {
data:object[]=[];
data1:object[]=[];
category:string;
medicine:string;
price:string;
quantity:string;
expiry:string;
constructor(private ds:MediService){}

ngOnInit()
{
  this.ds.sendMedData1().subscribe(temp=>{this.data=temp})
}
add(v)
{
  this.category=v;
  this.medicine=v;
  this.price=v;
  this.quantity=v;
  this.expiry=v;
  this.data.push(v);
  this.category=" ";
  this.medicine=" ";
  this.price=" ";
  this.quantity=" ";
  this.expiry=" ";
  this.ds.medData(v);
}
sendEditData()
{
  this.ds.sendEditData1(this.data1);
  console.log(this.data1)
}
delete(v)
{
  this.ds.delete1(v).subscribe(temp=>this.data=temp);
}
edit(v)
{
  this.data1=v;
}


 

 

}
