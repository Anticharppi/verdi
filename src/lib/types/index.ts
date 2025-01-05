interface SelectedCity {
  id: string;
  name: string;
  code: string;
  stateCode: string;
  stateName: string;
}

export interface CompanyFormValues {
  businessName: string;
  superServicesId: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
  operatingCities?: SelectedCity[];
}
