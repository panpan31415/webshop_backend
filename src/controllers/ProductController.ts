import { Product } from "../entity/Product";
import { getRepository } from "typeorm";

export class ProductController {
  private productRepository = getRepository(Product);
  async all() {
    return this.productRepository.find();
  }
}
