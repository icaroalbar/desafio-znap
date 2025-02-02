import { Client } from "@core/client/domain/client.entity";
import { ClientGateway } from "../client.gateway";

export class ClientRepositoryMock implements ClientGateway {
  private clients: Client[] = [];

  async create(client: Client): Promise<Client> {
    this.clients.push(client);
    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = this.clients.find((client) => client.getId() === id);
    if (!client) {
      throw new Error("Cliente não encontrado.");
    }
    return client;
  }

  async update(client: Client): Promise<Client> {
    const index = this.clients.findIndex((c) => c.getId() === client.getId());
    if (index === -1) throw new Error("Cliente não encontrado.");
    this.clients[index] = client;
    return client;
  }

  async delete(id: string): Promise<void> {
    const index = this.clients.findIndex((client) => client.getId() === id);
    if (index !== -1) {
      this.clients.splice(index, 1);
    } else {
      throw new Error("Cliente não encontrado.");
    }
  }

  async findAll(): Promise<Client[]> {
    return this.clients;
  }
}
