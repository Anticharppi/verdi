export type CreateServiceAreaEca = {
  companyCityId: string;
  code: string;
  price: number;
};

export type CreateServiceAreaRepositoryInput = {
  code: string;
  companyCityId: string;
  ecas: CreateServiceAreaEca[];
};
