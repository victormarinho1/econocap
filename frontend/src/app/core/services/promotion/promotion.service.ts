import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Promotion } from '../../../shared/models/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

   findAll(): Observable<Promotion[]> {
    
  return this.http.get<Promotion[]>(`${this.apiUrl}/promotions`);
}
}
