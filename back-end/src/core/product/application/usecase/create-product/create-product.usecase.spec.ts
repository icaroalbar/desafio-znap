import { ProductGateway } from "../../product.gateway";
import { CreateProductInputDto } from "./create-product.dto";
import { CreateProductUseCase } from "./create-product.usecase";

describe("CreateProductUseCase", () => {
  let productRepository: ProductGateway;
  let useCase: CreateProductUseCase;

  beforeEach(() => {
    productRepository = {
      create: jest.fn(async (product) => product),
      findById: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    useCase = new CreateProductUseCase(productRepository);
  });

  it("should create a product", async () => {
    const input: CreateProductInputDto = { name: "Produto Teste", price: 100 };

    const output = await useCase.execute(input);

    expect(output).toHaveProperty("id");
    expect(output.name).toBe("Produto Teste");
    expect(output.price).toBe(100);
    expect(productRepository.create).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if name is empty", async () => {
    const input: CreateProductInputDto = { name: "", price: 100 };

    await expect(useCase.execute(input)).rejects.toThrow(
      "Nome do produto não pode ser vazio."
    );
  });

  it("should throw an error if price is invalid", async () => {
    const input: CreateProductInputDto = {
      name: "Produto Inválido",
      price: -10,
    };

    await expect(useCase.execute(input)).rejects.toThrow(
      "Preço do produto é obrigatório e não pode ser menor ou igual a zero."
    );
  });

  it("should throw an error if repository fails", async () => {
    productRepository.create = jest.fn(async () => {
      throw new Error("Erro ao salvar no banco");
    });

    const input: CreateProductInputDto = { name: "Produto Teste", price: 100 };

    await expect(useCase.execute(input)).rejects.toThrow(
      "Erro ao salvar no banco"
    );
  });
});
