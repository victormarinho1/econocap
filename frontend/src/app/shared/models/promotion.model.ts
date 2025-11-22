import { Product } from './product.model';
export interface Promotion {
  id: string;
  products: Product
  title: string;
  summary: string;
  affiliate_network: string;
  affiliate_tag: string;
  affiliate_url: string;
  categories_id: number;
  coupon_code: string | null;
  currency: string;
  old_price: number;
  price: number;
  discount_price: string;
  product_id: string;
  stores_id: string;
  status: 'active' | 'inactive' | string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
}
