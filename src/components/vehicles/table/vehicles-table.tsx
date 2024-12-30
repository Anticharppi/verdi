"use client";

import { useRouter } from "next/navigation";
import { Vehicle } from "../types";
import { VehicleStatus } from "./vehicle-status";
import { VehicleTypeIcon } from "./vehicle-type-icon";
import { formatDate } from "@/lib/utils";

interface VehiclesTableProps {
  vehicles: Vehicle[];
}

export function VehiclesTable({ vehicles }: VehiclesTableProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vehículo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Placa
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacidades
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Proveedor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha de registro
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicles.length === 0 ? (
            <tr>
              <td 
                colSpan={6} 
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
              >
                No se encontraron vehículos
              </td>
            </tr>
          ) : (
            vehicles.map((vehicle) => (
              <tr 
                key={vehicle.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/dashboard/vehicles/${vehicle.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <VehicleTypeIcon type={vehicle.type} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {formatVehicleType(vehicle.type)}
                      </div>
                      {vehicle.brand && (
                        <div className="text-sm text-gray-500">
                          {vehicle.brand}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {vehicle.licensePlate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm text-gray-900">
                    {vehicle.volumeCapacity} m³
                  </div>
                  <div className="text-sm text-gray-500">
                    {vehicle.weightCapacity} kg
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{vehicle.provider.names}</div>
                  <div className="text-sm text-gray-500">{vehicle.provider.document}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <VehicleStatus status={vehicle.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {formatDate(vehicle.registrationDate)}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function formatVehicleType(type: string): string {
  const types = {
    VOLQUETA: "Volqueta",
    COMPACTADOR: "Compactador",
    TRACTO_CAMION: "Tracto Camión",
    CAMIONETA: "Camioneta",
    VEHICULO_TRACCION_HUMANA: "Vehículo de Tracción Humana",
    OTRO: "Otro"
  };
  return types[type] || type;
}