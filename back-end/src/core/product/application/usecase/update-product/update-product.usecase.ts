import { ProductGateway } from "../../product.gateway";
import {
  UpdateProductInputDto,
  UpdateProductOutputDto,
} from "./update-product.dto";

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductGateway) {}

  async execute(input: UpdateProductInputDto): Promise<UpdateProductOutputDto> {
    const findProduct = await this.productRepository.findById(input.id);

    findProduct.updateField(input.name, input.price);

    const updateProduct = await this.productRepository.update(findProduct);

    return {
      id: updateProduct.getId(),
      name: updateProduct.getName(),
      price: updateProduct.getPrice(),
    };
  }
}
