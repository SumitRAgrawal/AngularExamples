import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
