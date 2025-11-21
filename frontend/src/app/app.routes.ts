import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { PromotionList } from './features/promotion-list/promotion-list';
import { authGuard } from './auth/auth.guard';
import { Login } from './auth/pages/login/login';
import { PromotionForm } from './admin/components/promotion/promotion-form/promotion-form';
import { HomeComponent } from './admin/components/home/home.component';
import { PromotionAdmListComponent } from './admin/components/promotion/promotion-adm-list/promotion-adm-list.component';
import { ProductFormComponent } from './admin/components/product/product-form/product-form.component';
import { ProductListComponent } from './admin/components/product/product-list/product-list.component';
import { CategorieFormComponent } from './admin/components/categorie/categorie-form/categorie-form.component';
import { CategorieListComponent } from './admin/components/categorie/categorie-list/categorie-list.component';
import { StoreFormComponent } from './admin/components/store/store-form/store-form.component';
import { StoreListComponent } from './admin/components/store/store-list/store-list.component';

export const routes: Routes = [
   { path: '', component: PromotionList },
   { path: 'login', component: Login, title: 'Login' },
   { path: 'admin', component: Admin, canActivate: [authGuard] ,children:[
   {path:'', component:HomeComponent},
   {path:'promotion/new', component:PromotionForm},
   {path:'promotion/list', component:PromotionAdmListComponent},
   {path:'product/new', component:ProductFormComponent},
   {path:'product/list', component:ProductListComponent},
   {path:'categorie/new', component:CategorieFormComponent},
   {path:'categorie/list', component:CategorieListComponent},
   {path:'store/new', component:StoreFormComponent},
   {path:'store/list', component:StoreListComponent},

   { path: '**', redirectTo: '/admin' },

   ]},
   { path: '**', redirectTo: '/' },
];
