import { ClientRepositoryMock } from "../client.repository.mock";
import { CreateClientUseCase } from "./create-client.usecase";

describe("CreateClientUseCase", () => {
  let clientRepository: ClientRepositoryMock;
  let createClientUseCase: CreateClientUseCase;

  beforeEach(() => {
    clientRepository = new ClientRepositoryMock();
    createClientUseCase = new CreateClientUseCase(clientRepository);
  });

  it("should create a client successfully", async () => {
    const input = {
      name: "John Doe",
      email: "john.doe@example.com",
    };

    const output = await createClientUseCase.execute(input);

    expect(output).toHaveProperty("id");
    expect(output.name).toBe(input.name);
    expect(output.email).toBe(input.email);
  });

  it("should throw an error if name is empty", async () => {
    const input = {
      name: "",
      email: "john.doe@example.com",
    };

    await expect(createClientUseCase.execute(input)).rejects.toThrow(
      "Nome do cliente não pode ser vazio."
    );
  });

  it("should throw an error if email is invalid", async () => {
    const input = {
      name: "John Doe",
      email: "invalid-email",
    };

    await expect(createClientUseCase.execute(input)).rejects.toThrow(
      "Email do cliente é inválido."
    );
  });
});
