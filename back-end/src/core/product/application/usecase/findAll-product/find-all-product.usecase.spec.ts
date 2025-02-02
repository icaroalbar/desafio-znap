import { ProductRepositoryMock } from "../product.repository.mock";
import { Product } from "@core/product/domain/product.entity";
import { FindAllProductUseCase } from "./find-all-product.usecase";

describe("FindAllProductUseCase", () => {
  it("should return all products", async () => {
    const productRepository = new ProductRepositoryMock();
    const useCase = new FindAllProductUseCase(productRepository);

    const product1 = new Product({ name: "Produto A", price: 100 });
    const product2 = new Product({ name: "Produto B", price: 200 });

    await productRepository.create(product1);
    await productRepository.create(product2);

    const products = await useCase.execute();

    expect(products).toHaveLength(2);
    expect(products).toEqual([
      {
        id: product1.getId(),
        name: product1.getName(),
        price: product1.getPrice(),
      },
      {
        id: product2.getId(),
        name: product2.getName(),
        price: product2.getPrice(),
      },
    ]);
  });

  it("should return an empty array if no products exist", async () => {
    const productRepository = new ProductRepositoryMock();
    const useCase = new FindAllProductUseCase(productRepository);

    const products = await useCase.execute();

    expect(products).toHaveLength(0);
    expect(products).toEqual([]);
  });
});
