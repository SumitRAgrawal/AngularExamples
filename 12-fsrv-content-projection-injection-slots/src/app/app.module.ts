import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildToProjectComponent } from './child-to-project/child-to-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildToProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
