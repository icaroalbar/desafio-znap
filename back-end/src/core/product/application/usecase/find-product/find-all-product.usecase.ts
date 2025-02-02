import { FindProductOutputDto } from "./find-all-product.dto";
import { ProductGateway } from "../../product.gateway";

export class FindProductUseCase {
  constructor(private readonly productRepository: ProductGateway) {}

  async execute(productId: string): Promise<FindProductOutputDto> {
    const findProduct = await this.productRepository.findById(productId);

    return {
      id: findProduct.getId(),
      name: findProduct.getName(),
      price: findProduct.getPrice(),
    };
  }
}
