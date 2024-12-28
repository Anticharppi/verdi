export const mockStates = [
  { code: "ANT", name: "Antioquia" },
  { code: "BOL", name: "Bolívar" },
  { code: "CUN", name: "Cundinamarca" },
  { code: "VAL", name: "Valle del Cauca" },
] as const;

export const mockCities = {
  ANT: [
    { id: "1", name: "Medellín", code: "MED" },
    { id: "2", name: "Envigado", code: "ENV" },
    { id: "3", name: "Bello", code: "BEL" },
  ],
  BOL: [
    { id: "4", name: "Cartagena", code: "CTG" },
    { id: "5", name: "Magangué", code: "MAG" },
  ],
  CUN: [
    { id: "6", name: "Bogotá", code: "BOG" },
    { id: "7", name: "Soacha", code: "SOA" },
  ],
  VAL: [
    { id: "8", name: "Cali", code: "CAL" },
    { id: "9", name: "Palmira", code: "PAL" },
  ],
} as const;

export interface SelectedCity {
  id: string;
  name: string;
  code: string;
  stateCode: string;
  stateName: string;
}