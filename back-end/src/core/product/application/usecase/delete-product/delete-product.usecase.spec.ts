import { Product } from "@core/product/domain/product.entity";
import { DeleteProductUseCase } from "./delete-product.usecase";
import { ProductRepositoryMock } from "../product.repository.mock";

describe("DeleteProductUseCase", () => {
  let useCase: DeleteProductUseCase;
  let productRepositoryMock: ProductRepositoryMock;

  beforeEach(() => {
    productRepositoryMock = new ProductRepositoryMock();
    useCase = new DeleteProductUseCase(productRepositoryMock);
  });

  it("should delete the product successfully", async () => {
    const product = new Product({ name: "Produto A", price: 100 });
    await productRepositoryMock.create(product);

    const savedProduct = await productRepositoryMock.findById(product.getId());
    expect(savedProduct).toBeDefined();

    await useCase.execute(product.getId());

    await expect(
      productRepositoryMock.findById(product.getId())
    ).rejects.toThrow("Produto não encontrado.");
  });

  it("should throw an error if the product is not found", async () => {
    const nonExistentProductId = "non-existent-id";

    await expect(useCase.execute(nonExistentProductId)).rejects.toThrow(
      "Produto não encontrado."
    );
  });
});
