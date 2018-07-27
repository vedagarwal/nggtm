# NGGTM - A Google Tag Manager Module For Angular

NGGTM helps to create custom events for Google Tag Manager.

  - Easy To Use With Angular
  - Track custom events
  - Custom Directives for Buttons, Link etc.
  

## Prerequisites
GTM tag should be configured on the Angular Application before using this module. Follow the below given steps to setup GTM container.
  pwd

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
 
## License 

The MIT License (MIT)

Copyright (c) 2018 Ved Agarwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


