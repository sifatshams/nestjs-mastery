import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return {
      success: true,
      message: 'Products found!',
    };
  }
}
