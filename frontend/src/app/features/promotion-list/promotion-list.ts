
import { Component, inject, OnInit } from '@angular/core';
import { PromotionsService } from '../../core/services/promotion/promotion.service';
import { Promotion } from '../../shared/models/promotion.model';
import { PromotionCard } from "../../shared/components/promotionCard/promotionCard";
import { catchError, of, timeout } from 'rxjs';

@Component({
  selector: 'app-promotion-list',
  imports: [PromotionCard],
  templateUrl: './promotion-list.html',
  styleUrl: './promotion-list.css',
})
export class PromotionList implements OnInit{
  private promotionsService = inject(PromotionsService);
  promotions:Promotion[] | undefined
  isLoading: boolean = true;
  isError: boolean = false;


ngOnInit(): void {
    this.promotionsService.findAll().pipe(
      timeout(10000),  // Timeout de 10 segundos
      catchError((error) => {
        this.isError = true;
        this.isLoading = false;
        console.error('Erro ou timeout na API:', error);
        return of([]);  // Retorna um array vazio em caso de erro
      })
    ).subscribe(response => {
      this.promotions = response;
      this.isLoading = false;
    });
  }
}


