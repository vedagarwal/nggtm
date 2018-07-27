import { Component } from '@angular/core';
import {NgGtmService} from 'nggtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private gtm: NgGtmService){
    this.gtm.trackEvent("TEST_EVENT","TEST_CATEGORY","COMPONENT_INIT");
  }

  submit():void{
    console.log("Test Button Clicked");
  }
}
