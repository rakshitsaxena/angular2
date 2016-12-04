import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ProductModule} from './products/product.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    ProductModule,
    AppRoutingModule
    ],
  declarations: [ 
    WelcomeComponent,
    AppComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
