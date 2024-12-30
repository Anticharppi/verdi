export interface Material {
  id: string;
  name: string;
  code: string;
  price: number;
  companyId: string;
  baseMaterialId: string;
  nuecaId: string;
  baseMaterial: {
    id: string;
    code: string;
    name: string;
  };
  nueca: {
    id: string;
    code: string;
  };
}

export interface BaseMaterial {
  id: string;
  code: string;
  name: string;
}