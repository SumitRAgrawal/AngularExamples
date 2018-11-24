import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UpperCasePipe, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
