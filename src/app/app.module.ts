import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//to be able to make http requests we need to import httpClientModule
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDisplayComponent
  ],
  imports: [
    BrowserModule,
    //add httpClientModule to make http requests
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
