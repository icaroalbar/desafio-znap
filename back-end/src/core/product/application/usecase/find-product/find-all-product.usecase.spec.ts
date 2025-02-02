import { Product } from "@core/product/domain/product.entity";
import { ProductRepositoryMock } from "../product.repository.mock";
import { FindProductUseCase } from "./find-all-product.usecase";

describe("FindProductUseCase", () => {
  let productRepository: ProductRepositoryMock;
  let findProductUseCase: FindProductUseCase;

  beforeEach(() => {
    productRepository = new ProductRepositoryMock();
    findProductUseCase = new FindProductUseCase(productRepository);
  });

  it("should find a product by id", async () => {
    const product = new Product({ name: "Produto A", price: 100 });
    await productRepository.create(product);

    const foundProduct = await findProductUseCase.execute(product.getId());

    expect(foundProduct).toEqual({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
    });
  });

  it("should throw an error if the product is not found", async () => {
    await expect(findProductUseCase.execute("invalid-id")).rejects.toThrow(
      "Produto não encontrado."
    );
  });
});
