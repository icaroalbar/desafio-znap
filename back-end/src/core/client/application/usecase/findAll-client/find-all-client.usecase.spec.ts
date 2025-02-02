import { FindAllClientUseCase } from "./find-all-client.usecase";
import { ClientRepositoryMock } from "../client.repository.mock";
import { Client } from "@core/client/domain/client.entity";

describe("FindAllClientUseCase", () => {
  let useCase: FindAllClientUseCase;
  let clientRepositoryMock: ClientRepositoryMock;

  beforeEach(() => {
    clientRepositoryMock = new ClientRepositoryMock();
    useCase = new FindAllClientUseCase(clientRepositoryMock);
  });

  it("should return all clients", async () => {
    const client1 = new Client({
      name: "Client A",
      email: "clientA@example.com",
    });
    const client2 = new Client({
      name: "Client B",
      email: "clientB@example.com",
    });

    await clientRepositoryMock.create(client1);
    await clientRepositoryMock.create(client2);

    const clients = await useCase.execute();

    expect(clients).toHaveLength(2);
    expect(clients[0]).toEqual({
      id: client1.getId(),
      name: client1.getName(),
      email: client1.getEmail(),
    });
    expect(clients[1]).toEqual({
      id: client2.getId(),
      name: client2.getName(),
      email: client2.getEmail(),
    });
  });
});
