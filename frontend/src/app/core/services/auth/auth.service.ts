import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface SignInData {
  email: string | null | undefined;
  password_hash: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID)
  private apiUrl = environment.apiUrl;
  private tokenKey = 'authToken';

  isLoggedIn(): boolean {
     if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
    const token = this.getToken();
    return !!token;
  }

  signin(data: SignInData): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/auth/signin`, data).pipe(
      tap((response) => {
        // Armazena o token no cookie com segurança
        this.cookieService.set(this.tokenKey, response.access_token, {
          path: '/',
          secure: true,
          sameSite: 'Lax',
          expires: new Date(new Date().getTime() + 60 * 60 * 1000),
        });
      })
    );
  }

  getToken(): string | null {
    let token = this.cookieService.get(this.tokenKey);
    return token || null;
  }

  logout() {
    this.cookieService.delete(this.tokenKey, '/');
    this.router.navigate(['/login']);
  }
}
