import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ResultComponent } from './result/result.component';
import { ResultdetailsComponent } from './resultdetails/resultdetails.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
{path:'student',component:StudentComponent},
{path:'result',component:ResultComponent},
{path:'product',component:ProductComponent},
{path:'productdetails',component:ProductdetailsComponent},
{path:'productdetails/:id',component:ProductdetailsComponent},



{path:'resultdetails',component:ResultdetailsComponent},

{path:'resultdetails/:id',component:ResultdetailsComponent},
{path:'',redirectTo:'student',pathMatch:'full'},
{path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
