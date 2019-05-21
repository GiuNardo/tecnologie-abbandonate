import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ArchivioComponent } from './archivio/archivio.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'map', component:MapComponent},
  { path: 'timeline', component:TimelineComponent},
  { path: 'archivio', component:ArchivioComponent},
  { path: 'info', component:InfoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
