import { Component, OnInit } from '@angular/core';
import { MediService } from '../medi.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  constructor(private ds:MediService) { }
  data:object[]=[];
  ngOnInit() {
    this.ds.sendMedData().subscribe(temp=>{this.data=temp})
  }

}
