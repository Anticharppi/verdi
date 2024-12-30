export interface ProviderFormData {
  id: string;
  names: string;
  lastNames: string;
  dniType: string;
  dni: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  type: string;
  workingDay: string;
  workingWeekDay: string;
  nuecaId: string;
  status: string;
}

export interface NuecaData {
  id: string;
  code: string;
  name: string;
}

export type ProviderFormProps = {
  initialData: ProviderFormData;
}

export interface SelectOption {
  value: string;
  label: string;
}