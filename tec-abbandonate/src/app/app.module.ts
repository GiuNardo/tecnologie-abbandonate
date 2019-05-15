import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { NavFilterComponent } from './nav-filter/nav-filter.component';
import { NavMainComponent } from './nav-main/nav-main.component';

import { AppRoutingModule }     from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { ArchivioComponent } from './archivio/archivio.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSliderModule } from "@angular/material";
import { TimesliderComponent } from './timeslider/timeslider.component';
import { ItemDescrComponent } from './item-descr/item-descr.component';
import { AnteprimaComponent } from './anteprima/anteprima.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavFilterComponent,
    NavMainComponent,
    TimelineComponent,
    ArchivioComponent,
    HomeComponent,
    TimesliderComponent,
    ItemDescrComponent,
    AnteprimaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
