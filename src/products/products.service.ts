import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = ['T-Shirt', 'Baggy', 'Jeans'];
  getProducts() {
    return this.products;
  }

  totalProducts() {
    return this.products.length;
  }
}
