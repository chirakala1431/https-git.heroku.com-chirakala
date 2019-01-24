import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private ds1:RegistrationService) { }

  ngOnInit() {
  }
  add(v)
  {
    this.ds1.regData(v);
    console.log(v);
    
  }


}
