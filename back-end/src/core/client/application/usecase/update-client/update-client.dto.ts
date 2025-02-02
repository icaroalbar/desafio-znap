export interface UpdateClientInputDto {
  id: string;
  name?: string;
  email?: string;
}

export interface UpdateClientOutputDto {
  id: string;
  name: string;
  email: string;
}
