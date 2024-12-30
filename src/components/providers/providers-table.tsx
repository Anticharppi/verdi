"use client";

import { useRouter } from "next/navigation";
import { UserCircle2 } from "lucide-react";

interface Provider {
  id: string;
  names: string;
  lastNames: string;
  dni: string;
  dniType: string;
  phone: string;
  email: string;
  type: string;
  workingDay: string;
  workingWeekDay: string;
  status: string;
  createdAt: string;
}

const mockProviders: Provider[] = [
  {
    id: "1",
    names: "Juan Carlos",
    lastNames: "Pérez Rodríguez",
    dni: "12345678",
    dniType: "CC",
    phone: "3001234567",
    email: "juan@example.com",
    type: "Reciclador",
    workingDay: "Diurna",
    workingWeekDay: "Lunes a Viernes",
    status: "Activo",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    names: "María",
    lastNames: "González López",
    dni: "87654321",
    dniType: "CE",
    phone: "3109876543",
    email: "maria@example.com",
    type: "Transportador",
    workingDay: "Nocturna",
    workingWeekDay: "Todos los días",
    status: "Activo",
    createdAt: "2024-02-20T10:00:00Z"
  },
  {
    id: "3",
    names: "Pedro",
    lastNames: "Ramírez Silva",
    dni: "45678912",
    dniType: "CC",
    phone: "3205551234",
    email: "pedro@example.com",
    type: "Reciclador",
    workingDay: "Mixta",
    workingWeekDay: "Lunes a Sábado",
    status: "Inactivo",
    createdAt: "2024-03-10T10:00:00Z"
  }
];

interface ProvidersTableProps {
  searchQuery: string;
}

export function ProvidersTable({ searchQuery }: ProvidersTableProps) {
  const router = useRouter();

  const filteredProviders = mockProviders.filter(
    (provider) =>
      provider.names.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.lastNames.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.dni.includes(searchQuery) ||
      provider.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProviders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500">No se encontraron proveedores</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Proveedor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Identificación
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contacto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jornada
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
          {filteredProviders.map((provider) => (
            <tr
              key={provider.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => router.push(`/dashboard/providers/${provider.id}`)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {provider.names} {provider.lastNames}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {provider.dniType} {provider.dni}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{provider.phone}</div>
                <div className="text-sm text-gray-500">{provider.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {provider.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{provider.workingDay}</div>
                <div className="text-sm text-gray-500">
                  {provider.workingWeekDay}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    provider.status === "Activo"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {provider.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(provider.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}