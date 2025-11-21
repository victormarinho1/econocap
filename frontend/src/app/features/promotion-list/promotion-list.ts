
import { Component, inject, OnInit } from '@angular/core';
import { PromotionsService } from '../../core/services/promotion/promotion.service';
import { Promotion } from '../../shared/models/promotion.model';
import { PromotionCard } from "../../shared/components/promotionCard/promotionCard";

@Component({
  selector: 'app-promotion-list',
  imports: [PromotionCard],
  templateUrl: './promotion-list.html',
  styleUrl: './promotion-list.css',
})
export class PromotionList implements OnInit{
  private promotionsService = inject(PromotionsService);
  promotions:Promotion[] | undefined

  ngOnInit(): void {
    this.promotionsService.findAll().subscribe(response =>{
      this.promotions = response;
    })
}

}
