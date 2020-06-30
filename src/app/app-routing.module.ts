import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Stuff1Component } from './mat-comps/stuff1/stuff1.component';
import { Stuff2Component } from './mat-comps/stuff2/stuff2.component';
import { DatepickerHebComponent } from './mat-comps/datepicker-heb/datepicker-heb.component';
import { SchemaDashboardComponent } from './mat-comps/schema-dashboard/schema-dashboard.component';


const routes: Routes = [ 
  { path:'stuff1',      component:Stuff1Component},
  { path:'stuff2',      component:Stuff2Component},
  { path:'dp',      component:DatepickerHebComponent},
  { path:'dashboard',      component:SchemaDashboardComponent},


  { path:'',          redirectTo:'/stuff1',  pathMatch: 'full'},
  { path:'**',        redirectTo:'/stuff1',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
