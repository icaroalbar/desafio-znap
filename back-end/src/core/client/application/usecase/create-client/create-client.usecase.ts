import { Client } from "@core/client/domain/client.entity";
import { ClientGateway } from "../../client.gateway";
import {
  CreateClientInputDto,
  CreateClientOutputDto,
} from "./create-client.dto";

export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientGateway) {}

  async execute(input: CreateClientInputDto): Promise<CreateClientOutputDto> {
    const client = new Client({
      name: input.name,
      email: input.email,
    });

    const saveClient = await this.clientRepository.create(client);

    return {
      id: saveClient.getId(),
      name: saveClient.getName(),
      email: saveClient.getEmail(),
    };
  }
}
