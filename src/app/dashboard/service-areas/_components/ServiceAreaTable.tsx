"use client";

import { ServiceAreaTableRow } from "./ServiceAreaTableRow";
import { useServiceAreas } from "@/hooks/service-areas";
import ServiceAreaTableSkeleton from "./ServiceAreaTableSkeleton";
import { NoServiceAreas } from "./EmptyState";
import { useSelectedCompanyStore } from "@/store/companies";

export function ServiceAreaTable() {
  const { selectedCompany } = useSelectedCompanyStore();
  const { data, isLoading: isLoadingServiceAreas } = useServiceAreas(
    selectedCompany?.id
  );

  if (!data) return null;

  if (isLoadingServiceAreas) return <ServiceAreaTableSkeleton />;

  if (!data.length) return <NoServiceAreas />;

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
          {data.map((sa) => (
            <ServiceAreaTableRow
              key={sa.id}
              id={sa.id}
              stateName={sa.companyCity.city.state.name}
              cities={sa.nuecas.map((nueca) => nueca.companyCity.city)}
              createdAt={sa.createdAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
