import { UpdateclientUseCase } from "./update-client.usecase";
import { ClientRepositoryMock } from "../client.repository.mock";
import { Client } from "@core/client/domain/client.entity";

describe("UpdateClientUseCase", () => {
  let useCase: UpdateclientUseCase;
  let clientRepositoryMock: ClientRepositoryMock;

  beforeEach(() => {
    clientRepositoryMock = new ClientRepositoryMock();
    useCase = new UpdateclientUseCase(clientRepositoryMock);
  });

  it("should update the client successfully", async () => {
    const client = new Client({
      name: "Client A",
      email: "clientA@example.com",
    });

    await clientRepositoryMock.create(client);

    const updatedClientData = {
      id: client.getId(),
      name: "Updated Client A",
      email: "updatedClientA@example.com",
    };

    const updatedClient = await useCase.execute(updatedClientData);

    expect(updatedClient.name).toBe(updatedClientData.name);
    expect(updatedClient.email).toBe(updatedClientData.email);
  });

  it("should throw an error if the client is not found", async () => {
    const nonExistentClientId = "non-existent-id";
    const updateData = {
      id: nonExistentClientId,
      name: "Updated Name",
      email: "updatedEmail@example.com",
    };

    await expect(useCase.execute(updateData)).rejects.toThrow(
      "Cliente não encontrado."
    );
  });
});
