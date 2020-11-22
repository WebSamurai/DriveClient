import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as moment from 'moment-timezone';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
moment.tz.setDefault('Etc/UTC');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
