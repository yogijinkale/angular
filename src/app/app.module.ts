import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppView } from './app.view';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [
    AppComponent, AppView, NewCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NewCmpComponent]
})
export class AppModule { }
