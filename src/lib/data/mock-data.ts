import { MacroRoute } from "@/types/macro-routes";

export const MOCK_MACRO_ROUTES: MacroRoute[] = [
  {
    id: "1",
    code: "MR001",
    name: "Macro Ruta Norte",
    routes: [
      { id: "1", name: "Ruta Residencial 1", code: "R001" },
      { id: "2", name: "Ruta Comercial 1", code: "R002" },
    ],
    nuecas: [
      { id: "1", code: "NUECA001" },
      { id: "2", code: "NUECA002" },
    ],
  },
  {
    id: "2",
    code: "MR002",
    name: "Macro Ruta Sur",
    routes: [
      { id: "3", name: "Ruta Residencial 2", code: "R003" },
    ],
    nuecas: [
      { id: "1", code: "NUECA001" },
    ],
  },
];