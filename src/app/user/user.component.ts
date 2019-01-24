import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ds:UserService) { }
  data:object[]=[];
  
  ngOnInit() 
  {
    this.ds.userDetails().subscribe(temp=>{this.data=temp});
  }

}
