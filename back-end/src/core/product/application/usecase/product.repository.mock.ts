import { Product } from "@core/product/domain/product.entity";
import { ProductGateway } from "../product.gateway";

export class ProductRepositoryMock implements ProductGateway {
  private products: Product[] = [];

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async findById(id: string): Promise<Product> {
    const product = this.products.find((prod) => prod.getId() === id);
    if (!product) throw new Error("Produto não encontrado.");
    return product;
  }

  async update(product: Product): Promise<Product> {
    const index = this.products.findIndex(
      (prod) => prod.getId() === product.getId()
    );
    if (index === -1) throw new Error("Produto não encontrado.");
    this.products[index] = product;
    return product;
  }

  async delete(id: string): Promise<void> {
    const index = this.products.findIndex((product) => product.getId() === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    } else {
      throw new Error("Produto não encontrado.");
    }
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }
}
