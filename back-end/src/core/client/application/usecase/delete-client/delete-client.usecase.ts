import { ClientGateway } from "../../client.gateway";

export class DeleteClientUseCase {
  constructor(private readonly clientRepository: ClientGateway) {}

  async execute(clientId: string): Promise<void> {
    const client = await this.clientRepository.findById(clientId);

    if (!client) {
      throw new Error("Cliente não encontrado.");
    }

    await this.clientRepository.delete(client.getId());
  }
}
