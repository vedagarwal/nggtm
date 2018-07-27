import {Injectable} from '@angular/core';
import {sha256} from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class NgGtmService {

//USER ID or EMAIL HASH
  private userId:string;
  private window:any;

  constructor() {
    this.window = window;
    this.userId = null;
  }

  public trackEvent(event_name:string, event_category:string, event_label:string, properties?:any):void {

    console.log("Tracking Event");

    if (typeof this.window['dataLayer'] !== 'undefined' && this.window['dataLayer']) {

      properties = properties || {};

      let eventData = {
        event: event_name,
        event_category: event_category,
        event_label: event_label
      };

      this.window['dataLayer'].push(Object.assign(eventData, properties));
    }
  }

  public setUserId(userId:string):void {
    this.userId = userId;
  }

  public setUserEmailHash(userEmail:string):void {
    //TODO: Convert email to SHA 256 hash
    this.userId = sha256(userEmail);
  }

  public getUserEmailHash():string {
    return this.userId;
  }
}
