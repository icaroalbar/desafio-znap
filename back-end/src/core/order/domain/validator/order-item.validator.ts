import { OrderItemProps } from "../order-item.entity";

export class OrderItemValidator {
  static validateProduct(productId: string): void {
    if (!productId) {
      throw new Error("Produto não pode ser vazio.");
    }
  }

  static validateQuantity(quantity: number): void {
    if (!quantity || quantity <= 0) {
      throw new Error("Quantidade do item deve ser maior que zero.");
    }
  }

  static validate(item: Omit<OrderItemProps, "id" | "price">): void {
    this.validateProduct(item.productId);
    this.validateQuantity(item.quantity);
  }
}
