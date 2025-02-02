import { Client } from "@core/client/domain/client.entity";
import { ClientRepositoryMock } from "../client.repository.mock";
import { FindClientUseCase } from "./find-all-client.usecase";

describe("FindClientUseCase", () => {
  let useCase: FindClientUseCase;
  let clientRepositoryMock: ClientRepositoryMock;

  beforeEach(() => {
    clientRepositoryMock = new ClientRepositoryMock();
    useCase = new FindClientUseCase(clientRepositoryMock);
  });

  it("should find the client by id successfully", async () => {
    const client = new Client({
      name: "Cliente Teste",
      email: "cliente@test.com",
    });
    await clientRepositoryMock.create(client);

    const savedClient = await clientRepositoryMock.findById(client.getId());
    expect(savedClient).toBeDefined();

    const result = await useCase.execute(client.getId());

    expect(result.id).toBe(client.getId());
    expect(result.name).toBe(client.getName());
    expect(result.email).toBe(client.getEmail());
  });

  it("should throw an error if the client is not found", async () => {
    const nonExistentClientId = "non-existent-id";

    await expect(useCase.execute(nonExistentClientId)).rejects.toThrow(
      "Cliente não encontrado."
    );
  });
});
