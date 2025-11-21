import { Component, Input, model, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-product',
  imports: [CardModule, ButtonModule, CommonModule,GalleriaModule],
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

    // lista de imagens para teste
    this.images = [
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Imagem 1',
        title: 'Título 1'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
        alt: 'Imagem 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
        alt: 'Imagem 3',
        title: 'Título 3'
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


  images: any[] = [];
  responsiveOptions: any[] = [];


}
