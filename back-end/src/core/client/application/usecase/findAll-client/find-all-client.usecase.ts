import { ClientGateway } from "../../client.gateway";
import { FindAllClientOutputDto } from "./find-all-client.dto";

export class FindAllClientUseCase {
  constructor(private readonly clientRepository: ClientGateway) {}

  async execute(): Promise<FindAllClientOutputDto[]> {
    const findAllClient = await this.clientRepository.findAll();

    return findAllClient.map((client) => ({
      id: client.getId(),
      name: client.getName(),
      email: client.getEmail(),
    }));
  }
}
