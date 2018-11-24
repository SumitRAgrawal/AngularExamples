import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { FirstRouteFirstChildComponent } from './first-route-first-child/first-route-first-child.component';
import { FirstRouteSecondChildComponent } from './first-route-second-child/first-route-second-child.component';


const routes: Routes = [
  {
    path: '' , redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: FirstRouteComponent,

    children : [
      {path: '', redirectTo: 'child1', pathMatch: 'full'},
      {path: 'child1', component: FirstRouteFirstChildComponent},
      {path: 'child2', component: FirstRouteSecondChildComponent}
    ]
  },
  {
    path : 'about',
    component : SecondRouteComponent
  },
  {
    path : '**',
    component : NotFoundRouteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    NotFoundRouteComponent,
    FirstRouteFirstChildComponent,
    FirstRouteSecondChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
