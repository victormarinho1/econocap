import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './promotionCard.html',
  styleUrl: './promotionCard.css',
})
export class PromotionCard {
  @Input() imageUrl: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() description: string = '';

  @Input() price: number = 0;

  @Input() oldPrice: number = 0;

  @Input() affiliateUrl: string = '';

  get discountPercent(): number {
    if (!this.oldPrice || this.oldPrice <= this.price) return 0;
    return Math.round(((this.oldPrice - this.price) / this.oldPrice) * 100);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
