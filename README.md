# NGGTM - A Google Tag Manager Module For Angular

NGGTM helps to create custom events for Google Tag Manager.

  - Easy To Use With Angular
  - Track custom events
  - Custom Directives for Buttons, Link etc.
  

## Prerequisites
GTM tag should be configured on the Angular Application before using this module. Follow the below given steps to setup GTM container.
  

## Installation

Navigate to root folder of your angular application and run the following command:
```shell
npm install --save nggtm
```

#### Configuration
Once installed you need to import our main module:

```js
import {NgGtmModule} from 'nggtm';
```

The only remaining part is to list the imported module in your application module.
```js
...
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
```

#### Usage In Components

#### Usage In Templates

### Custom Events Setup In GTM (Google Tag Manager)

Use the below links to lean to setup custom event in Google Tag Manager:

* [AngularJS] - HTML enhanced for web apps!



### Todos

 - Write Tests
 - Add more helper methods

License
----

MIT


