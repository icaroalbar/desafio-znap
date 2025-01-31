import { randomUUID } from "node:crypto";
import { OrderItem } from "./order-item.entity";
import { OrderValidator } from "./validator/order.validator";

export type OrderProps = {
  readonly id: string;
  readonly date: Date;
  readonly clientId: string;
  items: OrderItem[];
};

export class Order {
  private _order: OrderProps;

  constructor(order: Omit<OrderProps, "id">) {
    OrderValidator.validate(order);
    this._order = {
      ...order,
      id: randomUUID(),
    };
  }

  getId(): string {
    return this._order.id;
  }

  getDate(): Date {
    return this._order.date;
  }

  getClientId(): string {
    return this._order.clientId;
  }

  getItems(): OrderItem[] {
    return this._order.items;
  }

  addItem(item: OrderItem): void {
    this._order.items.push(item);
  }

  removeItem(itemId: string): void {
    this._order.items = this._order.items.filter(
      (item) => item.getId() !== itemId
    );
  }

  updateItemQuantity(itemId: string, quantity: number): void {
    const item = this._order.items.find((item) => item.getId() === itemId);
    if (item) {
      item.updateQuantity(quantity);
    }
  }

  calculateTotal(): number {
    return this._order.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
    );
  }
}
