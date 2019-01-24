import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms'
import { SignComponent } from './sign/sign.component';
import { LogComponent } from './log/log.component';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { StockComponent } from './stock/stock.component';
import { MedComponent } from './med/med.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { PharmaComponent } from './pharma/pharma.component';
import { CartComponent } from './cart/cart.component';

import { DiseComponent } from './dise/dise.component';
import{NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { CaroComponent } from './caro/caro.component';
import { VitaComponent } from './vita/vita.component';

import { TranComponent } from './tran/tran.component';
import { SearchPipe } from './search.pipe';
import { DrugComponent } from './drug/drug.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    LogComponent,
    AdminComponent,
    StockComponent,
    MedComponent,
    UserComponent,
    ClientComponent,
    PharmaComponent,
    CartComponent,
    
    DiseComponent,
    CaroComponent,
    VitaComponent,
    
    TranComponent,
    
    SearchPipe,
    
    DrugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
