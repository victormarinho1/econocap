import { ProductImage } from "./producti-image.model";

export interface Product {
  id: string;
  name: string;
  description: string;
  url_image: string;
  created_at: Date;
  product_images: ProductImage[];

}
