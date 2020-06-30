import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Stuff1Component } from './mat-comps/stuff1/stuff1.component';
import { Stuff2Component } from './mat-comps/stuff2/stuff2.component';


const routes: Routes = [ 
  { path:'stuff1',      component:Stuff1Component},
  { path:'stuff2',      component:Stuff2Component},


  { path:'',          redirectTo:'/stuff1',  pathMatch: 'full'},
  { path:'**',        redirectTo:'/stuff1',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
