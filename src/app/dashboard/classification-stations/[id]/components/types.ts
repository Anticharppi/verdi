export interface Material {
  material: string;
  price: number;
}

export interface WeighingMachine {
  weightCapacity: number;
  installationDate: string;
  lastCalibrationDate: string;
  lastCalibrationCompanyName: string;
}

export interface ClassificationStationFormData {
  code: string;
  nuapCode: string;
  cityId: string;
  state: string;
  price: number;
  materials: Material[];
  weighingMachines: WeighingMachine[];
}

export interface TabPanelProps {
  control: any;
  register: any;
  watch: any;
  setValue: any;
  errors: any;
}