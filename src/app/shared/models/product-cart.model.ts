import { Product } from './product.model';


export interface ProductCart extends Product {
    quantity: number;
}
