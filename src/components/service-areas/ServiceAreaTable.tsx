"use client";

import { useServiceAreas } from "@/hooks/service-areas";
import ServiceAreaTableSkeleton from "./ServiceAreaTableSkeleton";
import { NoServiceAreas } from "./EmptyState";
import { useSelectedCompanyStore } from "@/store/companies";
import { ScrollText } from "lucide-react";
import { useRouter } from "next/navigation";

type City = {
  id: string;
  name: string;
  state: {
    id: string;
    name: string;
  };
};

type CompanyCity = {
  id: string;
  city: City;
};

type Nueca = {
  id: string;
  code: string;
  companyCity: CompanyCity;
};

export function ServiceAreaTable() {
  const { selectedCompany } = useSelectedCompanyStore();
  const { data, isLoading: isLoadingServiceAreas } = useServiceAreas(
    selectedCompany?.id
  );

  const router = useRouter();

  if (!data) return null;

  if (isLoadingServiceAreas) return <ServiceAreaTableSkeleton />;

  if (!data.length) return <NoServiceAreas />;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NUAP
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha de registro
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Última actualización
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((serviceArea) => (
            <tr
              key={serviceArea.id}
              onClick={() =>
                router.push(`/dashboard/service-areas/${serviceArea.id}`)
              }
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <ScrollText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {serviceArea.code}
                    </div>
                    <div className="text-sm text-gray-500">
                      {serviceArea.companyCity.city.state.name} -{" "}
                      {serviceArea.companyCity.city.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {serviceArea.createdAt.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {serviceArea.updatedAt.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
