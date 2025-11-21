import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ProductImage } from '../../models/producti-image.model';

@Component({
  selector: 'app-product',
  imports: [CardModule, ButtonModule, CommonModule,GalleriaModule],
  templateUrl: './promotionCard.html',
  styleUrl: './promotionCard.css',
})
export class PromotionCard implements OnInit{
  @Input() images: ProductImage[] =[]

  @Input() imageUrl: string = '';

  @Input() imageThubnail: string = '';

  @Input() title: string = '';

  @Input() subtitle: string = '';

  @Input() description: string = '';

  @Input() price: number = 0;

  @Input() oldPrice: number = 0;

  @Input() affiliateUrl: string = '';

  displayBasic: boolean = false;

  ngOnInit() {
  this.price = Number(this.price);
  this.oldPrice = Number(this.oldPrice);

// opções de responsividade do PrimeNG
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

}


  get discountPercent(): number {
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


  responsiveOptions: any[] = [];


}
