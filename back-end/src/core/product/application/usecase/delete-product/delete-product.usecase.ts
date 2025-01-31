import { ProductGateway } from "../../product.gateway";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductGateway) {}

  async execute(productId: string): Promise<void> {
    const findProduct = await this.productRepository.findById(productId);

    if (!findProduct) {
      throw new Error("Produto não encontrado.");
    }

    await this.productRepository.delete(findProduct.getId());
  }
}
