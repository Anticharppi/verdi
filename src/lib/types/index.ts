interface SelectedCity {
  id: string;
  name: string;
  code: string;
  stateCode: string;
  stateName: string;
}

export interface CompanyFormValues {
  name: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  operatingCities?: SelectedCity[];
}