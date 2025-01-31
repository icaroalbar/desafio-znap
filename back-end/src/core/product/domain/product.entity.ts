import { randomUUID } from "node:crypto";
import { ProductValidator } from "./product.validator";

export type ProductProps = {
  readonly id: string;
  name: string;
  price: number;
};

export class Product {
  private _product: ProductProps;

  constructor(product: Omit<ProductProps, "id">) {
    ProductValidator.validate(product);
    const formattedPrice = this.formatPrice(product.price);
    this._product = {
      ...product,
      id: randomUUID(),
      price: formattedPrice,
    };
  }

  getId(): string {
    return this._product.id;
  }

  getName(): string {
    return this._product.name;
  }

  getPrice(): number {
    return this._product.price;
  }

  changeName(newName: string): void {
    ProductValidator.validateName(newName);
    this._product.name = newName;
  }

  changePrice(newPrice: number): void {
    ProductValidator.validatePrice(newPrice);
    this._product.price = this.formatPrice(newPrice);
  }

  private formatPrice(price: number): number {
    return parseFloat(price.toFixed(2));
  }
}
