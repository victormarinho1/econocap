import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './promotionCard.html',
  styleUrl: './promotionCard.css',
})
export class PromotionCard implements OnInit{

  @Input() imageUrl: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() description: string = '';

  @Input() price: number = 0;

  @Input() oldPrice: number = 0;

  @Input() affiliateUrl: string = '';

  ngOnInit() {
  this.price = Number(this.price);
  this.oldPrice = Number(this.oldPrice);
}


  get discountPercent(): number {
    console.log(`oldprice: ${this.oldPrice}   price: ${this.price}`)
    console.log( this.oldPrice <= this.price)

    if (!this.oldPrice || this.oldPrice <= this.price) return 0;
    return Math.round(((this.oldPrice - this.price) / this.oldPrice) * 100);
  }

  public formatCurrency(value: number): string {
    const numberValue = Number(value);

    return numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
