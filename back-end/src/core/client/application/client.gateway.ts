import { Client } from "@core/client/domain/client.entity";

export interface ClientGateway {
  create(input: Client): Promise<Client>;
  findById(clientId: string): Promise<Client>;
  findAll(): Promise<Client[]>;
  update(input: Client): Promise<Client>;
  delete(clientId: string): Promise<void>;
}
