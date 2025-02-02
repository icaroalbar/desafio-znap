import { FindAllProductOutputDto } from "./find-all-product.dto";
import { ProductGateway } from "../../product.gateway";

export class FindAllProductUseCase {
  constructor(private readonly productRepository: ProductGateway) {}

  async execute(): Promise<FindAllProductOutputDto[]> {
    const findAllProduct = await this.productRepository.findAll();

    return findAllProduct.map((product) => ({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
    }));
  }
}
