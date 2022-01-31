import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ApolloModule } from 'apollo-angular';
//import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hellov2Component } from './hellov2.component';

@NgModule({
  declarations: [
    AppComponent, 
    HelloComponent, 
    Hellov2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ApolloModule,
    //HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }