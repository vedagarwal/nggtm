import { NgModule } from '@angular/core';
import { NgGtmDirective } from './directives/ng-gtm.directive';

@NgModule({
  imports: [
  ],
  declarations: [NgGtmDirective],
  providers : [{provide: Window, useValue: window }],
  exports: [NgGtmDirective],
})
export class NgGtmModule { }
