import { Material, BaseMaterial } from "@/types/materials";

export const MOCK_BASE_MATERIALS: BaseMaterial[] = [
  { id: "1", code: "BM001", name: "Cartón" },
  { id: "2", code: "BM002", name: "Plástico" },
  { id: "3", code: "BM003", name: "Vidrio" },
  { id: "4", code: "BM004", name: "Metal" }
];

export const MOCK_MATERIALS: Material[] = [
  {
    id: "1",
    name: "Cartón Corrugado",
    code: "M001",
    price: 1500,
    companyId: "1",
    baseMaterialId: "1",
    nuecaId: "1",
    baseMaterial: {
      id: "1",
      code: "BM001",
      name: "Cartón"
    },
    nueca: {
      id: "1",
      code: "NUECA001"
    }
  },
  {
    id: "2",
    name: "PET",
    code: "M002",
    price: 2000,
    companyId: "1",
    baseMaterialId: "2",
    nuecaId: "1",
    baseMaterial: {
      id: "2",
      code: "BM002",
      name: "Plástico"
    },
    nueca: {
      id: "1",
      code: "NUECA001"
    }
  }
];