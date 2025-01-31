import { Order } from "./order.entity";
import { OrderItem } from "./order-item.entity";

describe("Order Entity", () => {
  it("should create a valid order", () => {
    const order = new Order({
      clientId: "client-123",
      date: new Date(),
      items: [],
    });

    expect(order.getId()).toBeDefined();
    expect(order.getClientId()).toBe("client-123");
    expect(order.getItems()).toHaveLength(0);
  });

  it("should throw an error if clientId is missing", () => {
    expect(() => {
      new Order({
        clientId: undefined as any,
        date: new Date(),
        items: [],
      });
    }).toThrow("Cliente é obrigatório.");
  });

  it("should add an item to the order", () => {
    const order = new Order({
      clientId: "client-456",
      date: new Date(),
      items: [],
    });

    const item = new OrderItem({
      productId: "123",
      quantity: 2,
      price: 50,
    });

    order.addItem(item);

    expect(order.getItems()).toHaveLength(1);
    expect(order.getItems()[0].getProductId()).toBe("123");
    expect(order.calculateTotal()).toBe(100);
  });

  it("should remove an item from the order", () => {
    const order = new Order({
      clientId: "client-789",
      date: new Date(),
      items: [],
    });

    const item1 = new OrderItem({
      productId: "123",
      quantity: 2,
      price: 50,
    });

    const item2 = new OrderItem({
      productId: "456",
      quantity: 1,
      price: 100,
    });

    order.addItem(item1);
    order.addItem(item2);

    order.removeItem(item1.getId());

    expect(order.getItems()).toHaveLength(1);
    expect(order.getItems()[0].getProductId()).toBe("456");
    expect(order.calculateTotal()).toBe(100);
  });

  it("should update item quantity", () => {
    const order = new Order({
      clientId: "client-111",
      date: new Date(),
      items: [],
    });

    const item = new OrderItem({
      productId: "222",
      quantity: 2,
      price: 30,
    });

    order.addItem(item);
    order.updateItemQuantity(item.getId(), 5);

    expect(order.getItems()[0].getQuantity()).toBe(5);
    expect(order.calculateTotal()).toBe(150);
  });

  it("should calculate the total price of the order", () => {
    const order = new Order({
      clientId: "client-555",
      date: new Date(),
      items: [],
    });

    const item1 = new OrderItem({
      productId: "777",
      quantity: 3,
      price: 20,
    });

    const item2 = new OrderItem({
      productId: "888",
      quantity: 2,
      price: 50,
    });

    order.addItem(item1);
    order.addItem(item2);

    expect(order.calculateTotal()).toBe(160);
  });
});
