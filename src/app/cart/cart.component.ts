import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../pharma.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  p:number;
  data:object[]=[];

constructor(private ds:PharmaService)
{

}
ngOnInit()
{
  this.ds.receivePharmaData().subscribe(temp=>(this.data=temp))
}

}
