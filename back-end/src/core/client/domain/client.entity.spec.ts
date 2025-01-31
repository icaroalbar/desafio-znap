import { Client } from "./client.entity";

describe("Client Entity", () => {
  it("should create a valid client", () => {
    const client = new Client({
      name: "Cliente A",
      email: "clientea@example.com",
    });
    expect(client.getId()).toBeDefined();
    expect(client.getName()).toBe("Cliente A");
    expect(client.getEmail()).toBe("clientea@example.com");
  });

  it("should throw an error if name is empty", () => {
    expect(() => {
      new Client({ name: "", email: "cliente@example.com" });
    }).toThrow("Nome do cliente não pode ser vazio.");
  });

  it("should throw an error if email is invalid", () => {
    expect(() => {
      new Client({ name: "Cliente B", email: "invalid-email" });
    }).toThrow("Email do cliente é inválido.");
  });

  it("should throw an error if email is empty", () => {
    expect(() => {
      new Client({ name: "Cliente C", email: "" });
    }).toThrow("Email do cliente é inválido.");
  });

  it("should change name and email correctly", () => {
    const client = new Client({
      name: "Cliente D",
      email: "cliente@example.com",
    });
    client.changeName("Cliente E");
    client.changeEmail("novocliente@example.com");

    expect(client.getId()).toBeDefined();
    expect(client.getName()).toBe("Cliente E");
    expect(client.getEmail()).toBe("novocliente@example.com");
  });

  it("should throw error when changing name to empty string", () => {
    const client = new Client({
      name: "Cliente F",
      email: "cliente@example.com",
    });
    expect(() => client.changeName("")).toThrow(
      "Nome do cliente não pode ser vazio."
    );
  });

  it("should throw error when changing email to invalid format", () => {
    const client = new Client({
      name: "Cliente G",
      email: "cliente@example.com",
    });
    expect(() => client.changeEmail("invalid-email")).toThrow(
      "Email do cliente é inválido."
    );
  });

  it("should throw error when changing email to empty string", () => {
    const client = new Client({
      name: "Cliente H",
      email: "cliente@example.com",
    });
    expect(() => client.changeEmail("")).toThrow(
      "Email do cliente é inválido."
    );
  });
});
