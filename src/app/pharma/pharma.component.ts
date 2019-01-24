import { Component, OnInit } from '@angular/core';

import { MediService } from '../medi.service';
import { PharmaService } from '../pharma.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.css']
})
export class PharmaComponent implements OnInit  {
  data:object[]=[];
  data1:object[]=[];
  data2:object;
  quantity:number=1;
  p:number;
  constructor(private ds:MediService,private ds1:PharmaService,private ds2:LoginService) 
  { 
 
  }
  ngOnInit()
  {
    this.ds.sendMedData().subscribe(temp=>{this.data=temp})
   console.log(this.data)
    this.data2=this.ds2.sendPharma();
    console.log(this.data2)

  }
  sendCart(category,medicine,price,expiry,quantity,amount,username)
  {
    this.ds1.sendPharmaData({category,medicine,price,expiry,quantity,amount,username});
  }

  send1(v)
   {
     console.log(v);
    this.data1=v;
   }

   

   inc(v)
  {
    this.quantity=this.quantity+1;
  }

  dec(v)
  {
    this.quantity=this.quantity-1;
  }
 
  

}
