import { Product } from "@core/product/domain/product.entity";

export interface ProductGateway {
  create(input: Product): Promise<Product>;
  findById(productId: string): Promise<Product>;
  findAll(): Promise<Product[]>;
  update(input: Product): Promise<Product>;
  delete(productId: string): Promise<void>;
}
