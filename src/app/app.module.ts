import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultComponent } from './result/result.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResultdetailsComponent } from './resultdetails/resultdetails.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ResultComponent,
    NavBarComponent,
    NotfoundComponent,
    ResultdetailsComponent,
    ProductComponent,
    ProductdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
