import { Component, inject, OnInit, signal } from '@angular/core';
import { PromotionsService } from '../../core/services/promotion/promotion.service';
import { Promotion } from '../../shared/models/promotion.model';
import { PromotionCard } from '../../shared/components/promotionCard/promotionCard';
import { catchError, of, timeout } from 'rxjs';
import { DataView } from 'primeng/dataview';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../shared/models/product.model';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotion-list',
  imports: [PromotionCard, DataView, Tag, ButtonModule, CommonModule,SelectButton  ,    FormsModule

],
  templateUrl: './promotion-list.html',
  styleUrl: './promotion-list.css',
})
export class PromotionList implements OnInit {
onPageChange($event: Event) {
throw new Error('Method not implemented.');
}
  private promotionsService = inject(PromotionsService);
  promotions: Promotion[] | undefined;
  isLoading: boolean = true;
  isError: boolean = false;
  products = signal<any>([]);
  productService = inject(ProductService);
  layout: 'grid'| 'list' = 'grid';

  options = ['list', 'grid'];
  ngOnInit(): void {
    this.promotionsService
      .findAll()
      .pipe(
        timeout(10000), // Timeout de 10 segundos
        catchError((error) => {
          this.isError = true;
          this.isLoading = false;
          console.error('Erro ou timeout na API:', error);
          return of([]); // Retorna um array vazio em caso de erro
        })
      )
      .subscribe((response) => {
        this.promotions = response;
        this.isLoading = false;
      });
  }

  getSeverity(product: Product) {
    switch ('INSTOCK') {
      case 'INSTOCK':
        return 'success';
      default:
        return null;
    }
  }
}
