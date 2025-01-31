import { OrderProps } from "../order.entity";

export class OrderValidator {
  static validateClient(clientId: string): void {
    if (!clientId) {
      throw new Error("Cliente é obrigatório.");
    }
  }

  static validate(item: Omit<OrderProps, "id" | "price">): void {
    this.validateClient(item.clientId);
  }
}
