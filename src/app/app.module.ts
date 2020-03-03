import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcfirstPipe } from './ucfirst.pipe';
import { DetailsComponent } from './details/details.component';
//this is our form
import { ReactiveFormsModule } from '@angular/forms';
// this is to get the API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // adding forms
    HttpClientModule // adding Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
