import { Client } from "@core/client/domain/client.entity";
import { DeleteClientUseCase } from "./delete-client.usecase";
import { ClientRepositoryMock } from "../client.repository.mock";

describe("DeleteClientUseCase", () => {
  let useCase: DeleteClientUseCase;
  let clientRepositoryMock: ClientRepositoryMock;

  beforeEach(() => {
    clientRepositoryMock = new ClientRepositoryMock();
    useCase = new DeleteClientUseCase(clientRepositoryMock);
  });

  it("should delete the client successfully", async () => {
    const client = new Client({
      name: "Cliente Teste",
      email: "cliente@test.com",
    });
    await clientRepositoryMock.create(client);

    const savedClient = await clientRepositoryMock.findById(client.getId());
    expect(savedClient).toBeDefined();

    await useCase.execute(client.getId());

    await expect(clientRepositoryMock.findById(client.getId())).rejects.toThrow(
      "Cliente não encontrado."
    );
  });

  it("should throw an error if the client is not found", async () => {
    const nonExistentClientId = "non-existent-id";

    await expect(useCase.execute(nonExistentClientId)).rejects.toThrow(
      "Cliente não encontrado."
    );
  });
});
