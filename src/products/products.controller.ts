import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.getProducts();
  }

  @Get('count')
  totalCount() {
    return {
      totalProducts: this.productsService.totalProducts(),
    };
  }
}
