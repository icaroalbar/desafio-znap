import { Product } from "@core/product/domain/product.entity";
import {
  CreateProductInputDto,
  CreateProductOutputDto,
} from "./create-product.dto";
import { ProductGateway } from "../../product.gateway";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductGateway) {}

  async execute(input: CreateProductInputDto): Promise<CreateProductOutputDto> {
    const product = new Product({
      name: input.name,
      price: input.price,
    });

    const saveProduct = await this.productRepository.create(product);

    return {
      id: saveProduct.getId(),
      name: saveProduct.getName(),
      price: saveProduct.getPrice(),
    };
  }
}
