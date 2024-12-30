import { Route, RouteTypes } from "@/types/routes";

export const MOCK_ROUTES: Route[] = [
  {
    id: "1",
    name: "Ruta Residencial Norte",
    code: "RR001",
    type: RouteTypes.RECOLECCION_RESIDUOS_APROVECHABLES,
    entryOperationDate: "2024-01-01",
    startAddress: "Calle 100 #15-20",
    startTime: "06:00",
    endAddress: "Calle 140 #20-30",
    endTime: "14:00",
    distanceOnPavedRoute: 15.5,
    distanceOnNotPavedRoute: 2.3,
    weeklyFrequency: 3,
    frequency: "L-M-V",
    endsOnTransferStation: true,
    transferStationCode: "TS001",
    macroRouteId: "1",
    macroRoute: {
      id: "1",
      name: "Macro Ruta Norte",
      code: "MR001"
    }
  },
  {
    id: "2",
    name: "Ruta Comercial Centro",
    code: "RC001",
    type: RouteTypes.RECOLECCION_RESIDUOS_NO_APROVECHABLES,
    entryOperationDate: "2024-01-01",
    startAddress: "Carrera 7 #50-20",
    startTime: "07:00",
    endAddress: "Carrera 15 #85-40",
    endTime: "15:00",
    distanceOnPavedRoute: 12.8,
    distanceOnNotPavedRoute: 0,
    weeklyFrequency: 6,
    frequency: "L-M-M-J-V-S",
    endsOnTransferStation: false,
    macroRouteId: "2",
    macroRoute: {
      id: "2",
      name: "Macro Ruta Centro",
      code: "MR002"
    }
  }
];