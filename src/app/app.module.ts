import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { HttpClientModule } from'@angular/common/http';
import { LOCALE_ID } from'@angular/core';
import { registerLocaleData } from'@angular/common';
import localeFR from'@angular/common/locales/fr';
registerLocaleData(localeFR);

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MeteoComponent } from './components/meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
