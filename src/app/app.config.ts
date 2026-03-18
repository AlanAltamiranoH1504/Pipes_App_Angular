import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localEs from "@angular/common/locales/es-MX"
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs, "es")

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ]
};
