import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DemoMaterialModule } from './modules/mat.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Stuff1Component } from './mat-comps/stuff1/stuff1.component';
import { Stuff2Component } from './mat-comps/stuff2/stuff2.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatepickerHebComponent } from './mat-comps/datepicker-heb/datepicker-heb.component';
import { SchemaDashboardComponent } from './mat-comps/schema-dashboard/schema-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    Stuff1Component,
    Stuff2Component,
    DatepickerHebComponent,
    SchemaDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
