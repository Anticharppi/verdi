export enum RouteTypes {
  RECOLECCION_RESUDUOS_NO_APROVECHABLES = "RECOLECCION_RESUDUOS_NO_APROVECHABLES",
  BARRIDO_LIMPIEZA_VIAS_AREAS_PUBLICAS = "BARRIDO_LIMPIEZA_VIAS_AREAS_PUBLICAS",
  LIMPIEZA_PLAYAS = "LIMPIEZA_PLAYAS",
  CORTE_CESPED = "CORTE_CESPED",
  PODA_ARBOLES = "PODA_ARBOLES",
  RECOLECCION_RESIDUOS_APROVECHABLES = "RECOLECCION_RESIDUOS_APROVECHABLES",
  RECOLECCION_RESIDUOS_NO_APROVECHABLES = "RECOLECCION_RESIDUOS_NO_APROVECHABLES",
  RECOLECCION_RESIDUOS_PROVENIENTES_BARRIDO_LIMPIEZA_VIAS_AREAS_PUBLICAS = "RECOLECCION_RESIDUOS_PROVENIENTES_BARRIDO_LIMPIEZA_VIAS_AREAS_PUBLICAS",
  RECOLECCION_RESIDUOS_PROVENIENTES_PODA_CESPED_ARBOLES = "RECOLECCION_RESIDUOS_PROVENIENTES_PODA_CESPED_ARBOLES"
}

export interface Route {
  id: string;
  name: string;
  code: string;
  type: RouteTypes;
  entryOperationDate: string;
  startAddress: string;
  startTime: string;
  endAddress: string;
  endTime: string;
  distanceOnPavedRoute: number;
  distanceOnNotPavedRoute: number;
  weeklyFrequency: number;
  frequency: string;
  endsOnTransferStation: boolean;
  transferStationCode?: string;
  macroRouteId: string;
  macroRoute: {
    id: string;
    name: string;
    code: string;
  };
}