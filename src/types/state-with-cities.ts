export interface State {
  id: string;
  name: string;
  code: string;
  cities: string[];
}

export interface City {
  id: string;
  name: string;
  stateId: string;
}
