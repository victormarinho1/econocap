import { Component, inject, OnInit, signal } from '@angular/core';
import { PromotionsService } from '../../core/services/promotion/promotion.service';
import { Promotion } from '../../shared/models/promotion.model';
import { PromotionCard } from '../../shared/components/promotionCard/promotionCard';
import { catchError, of, timeout } from 'rxjs';
import { DataView } from 'primeng/dataview';
import { ProductService } from '../../core/services/product/product.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoryService } from '../../core/services/category/category.service';
import { InputText } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-promotion-list',
  imports: [
    PromotionCard,
    DataView,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule,
    InputText,
    InputGroupAddonModule,
    InputGroupModule
  ],
  templateUrl: './promotion-list.html',
  styleUrl: './promotion-list.css',
})
export class PromotionList implements OnInit {
  onPageChange($event: Event) {
    throw new Error('Method not implemented.');
  }
  private promotionsService = inject(PromotionsService);
  private categorieService = inject(CategoryService);
  promotions: Promotion[] | undefined;
  cateories: Category[] = [];
  isLoading: boolean = true;
  isError: boolean = false;
  products = signal<any>([]);
  productService = inject(ProductService);
  layout: 'grid' | 'list' = 'grid';

  options = ['list', 'grid'];
  ngOnInit(): void {
    this.promotionsService
      .findAll()
      .pipe(
        timeout(10000),
        catchError((error) => {
          this.isError = true;
          this.isLoading = false;
          console.error('Erro ou timeout na API:', error);
          return of([]);
        })
      )
      .subscribe((response) => {
        this.promotions = response;
        console.log(response);
        this.isLoading = false;
      });

    this.categorieService
      .findAll()
      .pipe(
        timeout(10000),
        catchError((error) => {
          this.isError = true;
          this.isLoading = false;
          console.error('Erro ou timeout na API:', error);
          return of([]);
        })
      )
      .subscribe({
        next: (response) => {
          this.cateories = response;
          console.log(response);
        },
      });
  }
}
