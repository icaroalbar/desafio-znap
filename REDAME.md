# Desafio: Sistema de Pedidos de Vendas

## Objetivo

Desenvolver um sistema básico de CRUD de pedidos de vendas com uma API Node.js e uma aplicação Vue.

## 1. Modelo de Banco de Dados Simplificado

### Tabelas:

- **Produtos**: `id_produto`, `nome`, `preco`
- **Clientes**: `id_cliente`, `nome`, `email`
- **Pedidos**: `id_pedido`, `data`, `id_cliente`
- **Pedido Itens**: `id_pedido_item`, `id_pedido`, `id_produto`, `qtde`, `preco`

### Relações:

- **Produtos** → Pedido Itens (um para muitos)
- **Clientes** → Pedidos (um para muitos)
- **Pedidos** → Pedido Itens (um para muitos)

---

## 2. API RESTful

### Tecnologia:

- **Node.js**
- **Fastify**

### Operações CRUD para:

- **Produtos**
- **Clientes**
- **Pedidos** (com sub-recursos para itens de pedido)

---

## 3. Aplicação WEB Simplificada

### Tecnologia:

- **Vue.js**
- **Vuetify**

### Funcionalidades:

- Página para listagem em **data-table** e CRUD de **Produtos**.
- Página para listagem em **data-table** e CRUD de **Clientes**.
- Página para listagem em **data-table** e CRUD de **Pedidos**, com possibilidade de abrir uma página/modal para listar e gerenciar os itens daquele pedido.
- Na página de criação e visualização de **Pedidos**, criar um **filtro permitindo selecionar clientes** via dropdown.
- Na página/modal de criação e visualização de **Itens de Pedido**, criar um **filtro permitindo selecionar produtos** via dropdown.

---

## Entregáveis

- **Diagrama do banco de dados** no MySQL Workbench.
- **Código fonte da API e da aplicação WEB**.
- **Documentação básica** com instruções para baixar do GitHub e rodar a aplicação localmente.
- **Docker Compose** (se possível) para facilitar a configuração do ambiente.
