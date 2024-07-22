import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getProducts() {
    return this.productsRepository.find({});
  }

  async getProductById(id: string) {
    return this.productsRepository.findOne({ _id: id });
  }

  async createProduct(newProductDto: any) {
    return this.productsRepository.create(newProductDto);
  }

  async updateProduct(id: string, updateProductDto: any) {
    return this.productsRepository.findOneAndUpdate(
      { _id: id },
      { $set: updateProductDto },
    );
  }

  async removeProduct(id: string) {
    return this.productsRepository.deleteOne({ _id: id });
  }
}
