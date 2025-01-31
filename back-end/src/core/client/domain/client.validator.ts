import { ClientProps } from "./client.entity";

export class ClientValidator {
  static validateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error("Nome do cliente não pode ser vazio.");
    }
  }

  static validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email do cliente é inválido.");
    }
  }

  static validate(client: Omit<ClientProps, "id">): void {
    this.validateName(client.name);
    this.validateEmail(client.email);
  }
}
