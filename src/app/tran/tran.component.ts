import { Component,ViewChild,ElementRef, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
//import * as trans from 'jspdf';
@Component({
  selector: 'app-tran',
  templateUrl: './tran.component.html',
  styleUrls: ['./tran.component.css'],
  providers:[{provide:'Window',useValue:window}]
})
export class TranComponent implements OnInit {
  @ViewChild('table') table:ElementRef;
  constructor(private ds:DataService) { };
  
  data:object[]=[];
  p:number;
  ngOnInit() 
  {
    this.ds.adminTrans().subscribe(temp=>{this.data=temp});
  }
//   trans(v)
//   {
//     var pdf=new trans();
//     let handler={
//       '#editor':function(element,renderer)
//       {
//         return true;
//       }
//     };
//     let table=this.table.nativeElement;
//     pdf.fromHTML(table.innerHTML,15,15,{'width':200,'elementHandlers':handler});
//     pdf.save("transaction.pdf");
//   }

}
