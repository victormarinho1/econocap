import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
      private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

   findAll(): Observable<Category[]> {

  return this.http.get<Category[]>(`${this.apiUrl}/categories`);
}
}
