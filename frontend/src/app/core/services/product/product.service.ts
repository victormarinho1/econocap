import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Product } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

   findAll(): Observable<Product[]> {

  return this.http.get<Product[]>(`${this.apiUrl}/products`);
}
}
