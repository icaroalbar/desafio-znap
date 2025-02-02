import { ClientGateway } from "../../client.gateway";
import { FindClientOutputDto } from "./find-all-client.dto";

export class FindClientUseCase {
  constructor(private readonly clientRepository: ClientGateway) {}

  async execute(clientId: string): Promise<FindClientOutputDto> {
    const findClient = await this.clientRepository.findById(clientId);

    return {
      id: findClient.getId(),
      name: findClient.getName(),
      email: findClient.getEmail(),
    };
  }
}
