"use client";

import { ServiceAreaTableRow } from "./ServiceAreaTableRow";
import { EmptyState } from "./EmptyState";

interface City {
  code: string;
  name: string;
}

interface ServiceArea {
  id: string;
  stateCode: string;
  stateName: string;
  cities: City[];
  createdAt: string;
  status: string;
}

interface ServiceAreaTableProps {
  areas: ServiceArea[];
}

export function ServiceAreaTable({ areas }: ServiceAreaTableProps) {
  if (areas.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Departamento
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ciudades
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
          {areas.map((area) => (
            <ServiceAreaTableRow
              key={area.id}
              id={area.id}
              stateName={area.stateName}
              cities={area.cities}
              createdAt={area.createdAt}
              status={area.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}