import { Component } from '@angular/core';
import { PromotionList } from '../../../features/promotion-list/promotion-list';

@Component({
  selector: 'app-client-home',
  imports: [PromotionList],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.css',
})
export class ClientHomeComponent {

}
