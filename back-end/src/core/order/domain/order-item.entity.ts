import { randomUUID } from "node:crypto";
import { OrderItemValidator } from "./validator/order-item.validator";

export type OrderItemProps = {
  readonly id: string;
  readonly productId: string;
  quantity: number;
  price: number;
};

export class OrderItem {
  private _item: OrderItemProps;

  constructor(item: Omit<OrderItemProps, "id">) {
    OrderItemValidator.validate(item);
    this._item = {
      ...item,
      id: randomUUID(),
    };
  }

  getId(): string {
    return this._item.id;
  }

  getProductId(): string {
    return this._item.productId;
  }

  getQuantity(): number {
    return this._item.quantity;
  }

  getPrice(): number {
    return this._item.price;
  }

  updateQuantity(newQuantity: number): void {
    OrderItemValidator.validateQuantity(newQuantity);
    this._item.quantity = newQuantity;
  }

  getTotalPrice(): number {
    return this._item.price * this._item.quantity;
  }
}
