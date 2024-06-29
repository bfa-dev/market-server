import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Bread',
      price: 5,
      tags: ['fresh', 'whole grain', 'baked'],
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((product) => product.id === +id);

    if (!product) {
      throw new HttpException(
        `product with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return product;
  }

  createProduct(newProductDto: any) {
    return newProductDto;
    return this.products.push(newProductDto);
  }

  updateProduct(id: number, updateProductDto: any) {
    const product = this.getProductById(id);

    if (product) {
      Object.assign(product, updateProductDto);
      return true;
    }

    return false;
  }

  removeProduct(id: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === +id,
    );

    if (productIndex >= 0) {
      this.products.splice(productIndex, 1);
      return true;
    }

    return false;
  }
}
