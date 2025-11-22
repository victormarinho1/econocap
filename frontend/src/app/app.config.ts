import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CookieService } from 'ngx-cookie-service';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './mypreset';
import { AuthInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
      providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
         cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
            },
            darkModeSelector: '.my-app-dark'
        }
      },

      ripple: true,
    }),
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    ),
    importProvidersFrom(CookieService),
    CookieService,
    provideRouter(routes),
     provideClientHydration(withEventReplay()),
    ]
};
