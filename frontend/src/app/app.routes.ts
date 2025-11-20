import { Routes } from '@angular/router';
import { PromotionForm } from './admin/components/promotion-form/promotion-form';
import { Admin } from './admin/admin';

export const routes: Routes = [
  { path:"admin", component:Admin,
    children:[
      { path:"promotion-form", component:PromotionForm}

    ]
  },
];
