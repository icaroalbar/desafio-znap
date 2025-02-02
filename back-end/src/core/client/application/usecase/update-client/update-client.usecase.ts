import { ClientGateway } from "../../client.gateway";
import {
  UpdateClientInputDto,
  UpdateClientOutputDto,
} from "./update-client.dto";

export class UpdateclientUseCase {
  constructor(private readonly clientRepository: ClientGateway) {}

  async execute(input: UpdateClientInputDto): Promise<UpdateClientOutputDto> {
    const findClient = await this.clientRepository.findById(input.id);

    findClient.updateField(input.name, input.email);

    const updateClient = await this.clientRepository.update(findClient);

    return {
      id: updateClient.getId(),
      name: updateClient.getName(),
      email: updateClient.getEmail(),
    };
  }
}
