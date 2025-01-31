import { OrderItem } from "./order-item.entity";

describe("OrderItem Entity", () => {
  it("should create a valid order item", () => {
    const orderItem = new OrderItem({
      productId: "123",
      quantity: 2,
      price: 100,
    });

    expect(orderItem.getId()).toBeDefined();
    expect(orderItem.getProductId()).toBe("123");
    expect(orderItem.getQuantity()).toBe(2);
    expect(orderItem.getPrice()).toBe(100);
    expect(orderItem.getTotalPrice()).toBe(200);
  });

  it("should throw an error if quantity is less than or equal to zero", () => {
    expect(() => {
      new OrderItem({
        productId: "456",
        quantity: 0,
        price: 150,
      });
    }).toThrow("Quantidade do item deve ser maior que zero.");
  });

  it("should update quantity correctly", () => {
    const orderItem = new OrderItem({
      productId: "789",
      quantity: 3,
      price: 50,
    });

    orderItem.updateQuantity(5);

    expect(orderItem.getQuantity()).toBe(5);
    expect(orderItem.getTotalPrice()).toBe(250); // 50 * 5
  });

  it("should throw an error if quantity is updated to a non-positive value", () => {
    const orderItem = new OrderItem({
      productId: "101",
      quantity: 1,
      price: 75,
    });

    expect(() => orderItem.updateQuantity(-1)).toThrow(
      "Quantidade do item deve ser maior que zero."
    );
  });
});
