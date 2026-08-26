import { ApplicationConfig, provideBrowserGlobalErrorListeners, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomTranslateLoader } from './services/custom-translate-loader';
import { provideTranslateService, provideTranslateLoader } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideTranslateService({
      loader: provideTranslateLoader(() => new CustomTranslateLoader(inject(HttpClient))),
      fallbackLang: 'es',
      lang: 'es'
    })
  ]
};
