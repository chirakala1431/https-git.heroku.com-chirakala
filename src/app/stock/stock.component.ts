import { Component, OnInit } from '@angular/core';

import { MediService } from '../medi.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit  {

  data:object[]=[];

constructor(private ds:MediService){
  
}

ngOnInit()
{
   this.ds.sendMedData().subscribe(temp=>{this.data=temp})
   console.log(this.data)
}

}
