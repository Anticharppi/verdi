export type VehicleType = 
  | "VOLQUETA"
  | "COMPACTADOR"
  | "TRACTO_CAMION"
  | "CAMIONETA"
  | "VEHICULO_TRACCION_HUMANA"
  | "OTRO";

export interface Vehicle {
  id: string;
  type: VehicleType;
  licensePlate: string;
  volumeCapacity: number;
  weightCapacity: number;
  axesAmount: number;
  registrationDate: string;
  entryOperationDate: string;
  brand: string;
  provider: {
    id: string;
    names: string;
    document: string;
  };
  status: "ACTIVE" | "INACTIVE";
}

export interface VehicleFormData {
  id: string;
  type: VehicleType;
  licensePlate: string;
  volumeCapacity: number;
  weightCapacity: number;
  axesAmount: number;
  registrationDate: string;
  entryOperationDate: string;
  brand: string;
  providerId: string;
}

export interface VehicleFormProps {
  initialData: VehicleFormData;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface MockProvider {
  id: string;
  name: string;
  document: string;
}