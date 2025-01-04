"use client";

import { Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Station } from "./types";

interface StationTableRowProps extends Station {}

export function StationTableRow({
  id,
  code,
  city,
  price,
  nuap,
  materials,
  status,
  createdAt,
}: StationTableRowProps) {
  const router = useRouter();

  return (
    <tr 
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => router.push(`/dashboard/classification-stations/${id}`)}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{code}</div>
            <div className="text-sm text-gray-500">{nuap.code}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{city.name}</div>
        <div className="text-sm text-gray-500">{city.state.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(price)}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-1">
          {materials.slice(0, 3).map((material) => (
            <Badge 
              key={material.id}
              variant="secondary"
              className="bg-gray-100 text-gray-800"
            >
              {material.name}
            </Badge>
          ))}
          {materials.length > 3 && (
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              +{materials.length - 3}
            </Badge>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {status === 'active' ? 'Activo' : 'Inactivo'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
}