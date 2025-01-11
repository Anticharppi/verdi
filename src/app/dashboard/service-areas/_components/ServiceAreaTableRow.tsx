"use client";

import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

interface City {
  code: string;
  name: string;
}

interface ServiceAreaTableRowProps {
  id: string;
  stateName: string;
  cities: City[];
  createdAt: Date;
}

export function ServiceAreaTableRow({
  id,
  stateName,
  cities,
  createdAt,
}: ServiceAreaTableRowProps) {
  const router = useRouter();

  return (
    <tr
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => router.push(`/dashboard/service-areas/${id}`)}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{stateName}</div>
            <div className="text-sm text-gray-500">
              {cities.length} ciudades
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">
          <div className="flex flex-wrap gap-1">
            {cities.map((city) => (
              <span
                key={city.code}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {city.name}
              </span>
            ))}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Activo
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {createdAt.toLocaleDateString()}
      </td>
    </tr>
  );
}
