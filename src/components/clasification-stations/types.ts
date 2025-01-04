export interface Material {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface WeighingMachine {
  id: string;
  weightCapacity: number;
  installationDate: string;
  lastCalibrationDate: string;
}

export interface City {
  id: string;
  name: string;
  state: {
    code: string;
    name: string;
  };
}

export interface NUAP {
  id: string;
  code: string;
}

export interface Station {
  id: string;
  code: string;
  city: City;
  price: number;
  nuap: NUAP;
  materials: Material[];
  weighingMachines: WeighingMachine[];
  status: string;
  createdAt: string;
}
