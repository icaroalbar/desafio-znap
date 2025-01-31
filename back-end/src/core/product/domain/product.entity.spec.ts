import { Product } from "./product.entity";

describe("Product Entity", () => {
  it("should create a valid product", () => {
    const product = new Product({ name: "Produto A", price: 100.5 });
    expect(product.getId()).toBeDefined();
    expect(product.getName()).toBe("Produto A");
    expect(product.getPrice()).toBe(100.5);
  });

  it("should throw an error if name is empty", () => {
    expect(() => {
      new Product({ name: undefined as any, price: 100.5 });
    }).toThrow("Nome do produto não pode ser vazio.");
  });

  it("should throw an error if price is zero or negative", () => {
    expect(() => {
      new Product({ name: "Produto B", price: 0 });
    }).toThrow(
      "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
    );

    expect(() => {
      new Product({ name: "Produto C", price: -10 });
    }).toThrow(
      "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
    );
  });

  it("should change name and price correctly", () => {
    const product = new Product({ name: "Produto D", price: 150 });

    product.updateField("Produto E", 200.99);

    expect(product.getId()).toBeDefined();
    expect(product.getName()).toBe("Produto E");
    expect(product.getPrice()).toBe(200.99);
  });

  it("should throw error when changing name to empty string", () => {
    const product = new Product({ name: "Produto F", price: 120 });

    expect(() => product.updateField("")).toThrow(
      "Nome do produto não pode ser vazio."
    );
  });

  it("should throw error when changing price to zero or negative", () => {
    const product = new Product({ name: "Produto G", price: 130 });
    expect(() => product.updateField(undefined, 0)).toThrow(
      "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
    );
    expect(() => product.updateField(undefined, -5)).toThrow(
      "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
    );
  });
});
