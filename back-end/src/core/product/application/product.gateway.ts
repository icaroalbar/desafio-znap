import { Product } from "@core/product/domain/product.entity";

export interface ProductGateway {
  create(input: Product): Promise<Product>;
  findById(productId: string): Promise<Product>;
  update(input: Product): Promise<Product>;
}
