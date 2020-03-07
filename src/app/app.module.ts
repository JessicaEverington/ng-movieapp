import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// home/app wrapper
import { AppComponent } from './app.component';
// OMDB uses first letter upper
import { UcfirstPipe } from './ucfirst.pipe';
//page elements
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

//this is our form
import { ReactiveFormsModule } from '@angular/forms';
// this is to get the API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    DetailsComponent,
    SearchComponent
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
