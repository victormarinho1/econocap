import { DatePicker } from 'primeng/datepicker';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Message } from 'primeng/message';
import { StepperModule } from 'primeng/stepper';
import { StoreService } from '../../../../core/services/store/store.service';
import { Store } from '../../../../shared/models/store.model';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../core/services/product/product.service';
import { PromotionsService } from '../../../../core/services/promotion/promotion.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-promotion-form',
  imports: [SelectModule, DatePicker, ReactiveFormsModule, InputText, TextareaModule, ButtonModule,
    CommonModule, Message,StepperModule, ButtonModule, FormsModule, ToastModule],
    providers:[MessageService],
  templateUrl: './promotion-form.html',
  styleUrl: './promotion-form.css',
})
export class PromotionForm implements OnInit {
private productService = inject(ProductService)
private storeService = inject(StoreService)
private promotionService = inject(PromotionsService)
private messageService = inject(MessageService)

activeStep: number = 1;


successMessage: string | null = null;
errorMessage: string | null = null;

promotionForm = new FormGroup({
  title: new FormControl('1', Validators.required),
  summary: new FormControl('1', Validators.required),
  store_id: new FormControl('', Validators.required),
  affiliate_url: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
  coupon_code: new FormControl(''),
  old_price: new FormControl(0, Validators.required),
  price: new FormControl(0, Validators.required),
  product_id: new FormControl('', Validators.required),
  status: new FormControl('active', Validators.required),
  starts_at: new FormControl(new Date(), Validators.required),
  ends_at: new FormControl(new Date(), Validators.required),
});

stores:Store[] = []
products:Product[] = []
selectedStore:Store | null = null
selectedProduct:Product | null = null
categories:any[] = []



  ngOnInit(): void {
    this.storeService.findAll().subscribe(response =>{
      this.stores = response
    })

    this.productService.findAll().subscribe(response =>{
      this.products = response
    })
  }
submit(activateCallback: Function) {
  this.promotionService.create(this.promotionForm.value).subscribe({
    next: (promotion) => {
      this.errorMessage = null;
      this.promotionForm.reset();
      this.selectedStore = null;
      this.selectedProduct = null;
      activateCallback(1)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Promoção cadastrada com sucesso' });

    },
    error: (error) => {
      this.errorMessage = "Erro ao criar a promoção. Tente novamente.";
      this.successMessage = null;
    }
  });
}


  onNext(activateCallback: Function,step:number) {
    let stepControls = ['title', 'summary', 'old_price', 'price', 'starts_at', 'ends_at'];
    if(step == 3){
      stepControls = ['affiliate_url', 'product_id'];
    }
   let isValid = true;
  stepControls.forEach(control => {
    const field = this.promotionForm.get(control);
    if (field && field.invalid) {
      field.markAsTouched();
      isValid = false;
    }
  });

  if (isValid) {

    activateCallback(step);
  }
}

onStoreSelected(id: string) {
 const store:Store | undefined = this.stores.find(store => store.id === id);
 if(store != undefined){
   this.selectedStore = store
 }
}
 onProductSelected(id: string) {
 const product:Product | undefined = this.products.find(product => product.id === id);
 if(product != undefined){
   this.selectedProduct = product
 }
}



}
