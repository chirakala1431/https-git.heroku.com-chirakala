import { Component, OnInit } from '@angular/core';


import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent  {

constructor(private ds2:LoginService,private router:Router){}
add(v)
{
this.ds2.logData(v).subscribe(temp=>{alert(temp);
if(temp=="login succcessful")
{
  if(v.username=="admin" && v.password=="Admin@1234")
  {
    this.router.navigate(['/admin'])
  }
  else
  {
 this.router.navigate(['/client'])
}
}});

}

}
