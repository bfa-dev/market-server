import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
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

  getProductById(id: string) {
    return this.products.find((product) => product.id === +id);
  }

  createProduct(newProductDto: any) {
    return this.products.push(newProductDto);
  }

  updateProduct(id: string, updateProductDto: any) {
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
