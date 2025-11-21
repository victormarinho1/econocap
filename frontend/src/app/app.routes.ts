import { Routes } from '@angular/router';
import { PromotionForm } from './admin/components/promotion-form/promotion-form';
import { Admin } from './admin/admin';
import { PromotionList } from './features/promotion-list/promotion-list';

export const routes: Routes = [
  {path:"", component:PromotionList},
  { path:"admin", component:Admin,
    children:[
      { path:"promotion-form", component:PromotionForm}

    ]
  },
];
