import { Product } from "@core/product/domain/product.entity";
import { UpdateProductInputDto } from "./update-product.dto";
import { UpdateProductUseCase } from "./update-product.usecase";
import { ProductRepositoryMock } from "../product.repository.mock";

describe("UpdateProductUseCase", () => {
  let useCase: UpdateProductUseCase;
  let productRepositoryMock: ProductRepositoryMock;

  beforeEach(() => {
    productRepositoryMock = new ProductRepositoryMock();
    useCase = new UpdateProductUseCase(productRepositoryMock);
  });

  it("should update product name and price", async () => {
    const product = new Product({ name: "Produto A", price: 100 });
    await productRepositoryMock.create(product);

    const input: UpdateProductInputDto = {
      id: product.getId(),
      name: "Produto Atualizado",
      price: 150,
    };

    const result = await useCase.execute(input);

    expect(result.name).toBe("Produto Atualizado");
    expect(result.price).toBe(150);
  });

  it("should update only product name", async () => {
    const product = new Product({ name: "Produto B", price: 200 });
    await productRepositoryMock.create(product);

    const input: UpdateProductInputDto = {
      id: product.getId(),
      name: "Produto Apenas Nome",
      price: undefined,
    };

    const result = await useCase.execute(input);

    expect(result.name).toBe("Produto Apenas Nome");
    expect(result.price).toBe(200);
  });

  it("should update only product price", async () => {
    const product = new Product({ name: "Produto C", price: 300 });
    await productRepositoryMock.create(product);

    const input: UpdateProductInputDto = {
      id: product.getId(),
      name: undefined,
      price: 350,
    };

    const result = await useCase.execute(input);

    expect(result.name).toBe("Produto C");
    expect(result.price).toBe(350);
  });

  it("should throw error if product is not found", async () => {
    const input: UpdateProductInputDto = {
      id: "non-existent-id",
      name: "Produto Inexistente",
      price: 400,
    };

    await expect(useCase.execute(input)).rejects.toThrow(
      "Produto não encontrado."
    );
  });
});
