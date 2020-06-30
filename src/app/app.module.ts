import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DemoMaterialModule } from './modules/mat.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Stuff1Component } from './mat-comps/stuff1/stuff1.component';
import { Stuff2Component } from './mat-comps/stuff2/stuff2.component';

@NgModule({
  declarations: [
    AppComponent,
    Stuff1Component,
    Stuff2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
