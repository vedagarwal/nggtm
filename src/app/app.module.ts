import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgGtmModule} from 'nggtm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGtmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
