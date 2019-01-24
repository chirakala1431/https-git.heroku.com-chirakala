import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { LogComponent } from './log/log.component';
import { TranComponent } from './tran/tran.component';
import { StockComponent } from './stock/stock.component';
import { MedComponent } from './med/med.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { PharmaComponent } from './pharma/pharma.component';
import { CartComponent } from './cart/cart.component';
import { VitaComponent } from './vita/vita.component';
import { DiseComponent } from './dise/dise.component';
import { CaroComponent } from './caro/caro.component';
import { DrugComponent } from './drug/drug.component';

const routes: Routes = [{path:'home', component:HomeComponent,children:[{path:'drug',component:DrugComponent},{path:'caro',component:CaroComponent}]},
{path:'home/sign', component:SignComponent},
{path:'home/log',component:LogComponent},
{path:'home/log/sign', component:SignComponent},
{path:'home/sign', component:LogComponent},
{path:'home/log/sign', component:LogComponent},

{path:'admin', component:AdminComponent ,
children:[{path:'', component:StockComponent},{path:'stock', component:StockComponent},{path:'medicine', component:MedComponent},
{path:'user', component:UserComponent},{path:'transaction', component:TranComponent}]},
{path:'client', component:ClientComponent, children:[{path:'cart', component:CartComponent},

{path:'',component:DiseComponent},{path:'dise', component:DiseComponent},{path:'vit', component:VitaComponent},{path:'pharma', component:PharmaComponent}]},


{path:'',redirectTo:'home/caro',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
