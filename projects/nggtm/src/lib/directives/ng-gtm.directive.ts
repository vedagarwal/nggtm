import {Directive, Input, HostListener, ElementRef} from '@angular/core';
import {NgGtmService} from '../services/ng-gtm.service';

@Directive({
  selector: '[NgGtm]'
})
export class NgGtmDirective {

  @Input()
  eventName:string;

  @Input()
  eventLabel:string;

  @Input()
  eventCategory:string;

  constructor(private el:ElementRef, private gtm:NgGtmService) {}

  @HostListener('click') onClick() {
    this.gtm.trackEvent(this.eventName, this.eventCategory, this.eventLabel);
  }

}
