import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTransloco } from '@ngneat/transloco';
import { API_BASE_URL } from '../Nswag/lms.api';
import { environment } from '../environment/environment';
import { TranslocoHttpLoader } from '../core/transloco-loader';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideClientHydration(),  provideHttpClient(withFetch()),
    {
      provide: API_BASE_URL,
      useValue: environment.API_BASE_URL,
    },
    provideHttpClient(), provideTransloco({
        config: {
          availableLangs: ['uz', 'ru', 'en'],
          defaultLang: 'en',
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ]
};
