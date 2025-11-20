import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../../shared/models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  findAll(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/stores`);
  }
}
