import { DatePicker } from 'primeng/datepicker';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Product } from '../../../shared/models/product.model';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-promotion-form',
  imports: [SelectModule,DatePicker, ReactiveFormsModule, InputText, TextareaModule, ButtonModule],
  templateUrl: './promotion-form.html',
  styleUrl: './promotion-form.css',
})
export class PromotionForm {
submit() {
throw new Error('Method not implemented.');
}
promotionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      summary: new FormControl(''),
      affiliate_network: new FormControl(''),
      affiliate_tag: new FormControl(''),
      affiliate_url: new FormControl('', Validators.pattern('https?://.+')),
      categories_id: new FormControl(null, Validators.required),
      coupon_code: new FormControl(''),
      currency: new FormControl('', Validators.required),
      old_price: new FormControl(0, Validators.required),
      price: new FormControl(0, Validators.required),
      discount_price: new FormControl(''),
      product_id: new FormControl(null, Validators.required),
      stores_id: new FormControl(''),
      status: new FormControl('active', Validators.required),
      starts_at: new FormControl(null, Validators.required),
      ends_at: new FormControl(null, Validators.required),
    });

    products: Product[] = [
    {
      id: '1', name: 'Produto 1',
      description: '',
      url_image: '',
      created_at: new Date
    },
    {
      id: '2', name: 'Produto 2',
      description: '',
      url_image: '',
      created_at: new Date
    }
  ];
     statuses = [
    { label: 'Ativo', value: 'active' },
    { label: 'Inativo', value: 'inactive' }
  ];
}
