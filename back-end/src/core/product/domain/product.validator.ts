import { ProductProps } from "./product.entity";

export class ProductValidator {
  static validateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error("Nome do produto não pode ser vazio.");
    }
  }

  static validatePrice(price: number): void {
    if (!price || price <= 0) {
      throw new Error(
        "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
      );
    }
  }

  static validate(product: Omit<ProductProps, "id">): void {
    this.validateName(product.name);
    this.validatePrice(product.price);
  }
}
