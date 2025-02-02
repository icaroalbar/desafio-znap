import { randomUUID } from "node:crypto";
import { ClientValidator } from "./client.validator";

export type ClientProps = {
  readonly id: string;
  name: string;
  email: string;
};

export class Client {
  private _client: ClientProps;

  constructor(client: Omit<ClientProps, "id">) {
    ClientValidator.validate(client);
    this._client = {
      ...client,
      id: randomUUID(),
    };
  }

  getId(): string {
    return this._client.id;
  }

  getName(): string {
    return this._client.name;
  }

  getEmail(): string {
    return this._client.email;
  }

  changeName(newName: string): void {
    ClientValidator.validateName(newName);
    this._client.name = newName;
  }

  changeEmail(newEmail: string): void {
    ClientValidator.validateEmail(newEmail);
    this._client.email = newEmail;
  }

  updateField(newName?: string, newEmail?: string): void {
    if (newName !== undefined) {
      this.changeName(newName);
    }

    if (newEmail !== undefined) {
      this.changeEmail(newEmail);
    }
  }
}
