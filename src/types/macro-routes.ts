export interface MacroRoute {
  id: string;
  code: string;
  name: string;
  routes: Route[];
  nuecas: Nueca[];
}

export interface Route {
  id: string;
  name: string;
  code: string;
}

export interface Nueca {
  id: string;
  code: string;
}