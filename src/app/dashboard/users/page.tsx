"use client";

import { Plus, Search, Building2, ChevronDown, UserIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  isAdmin: boolean;
  companies: CompanyUser[];
}

interface CompanyUser {
  id: string;
  userId: string;
  companyId: string;
  companyName: string;
  role: 'admin' | 'manager' | 'operator';
  createdAt: string;
  updatedAt: string;
}

interface Company {
  id: string;
  businessName: string;
}

export default function UsersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'manager':
        return 'bg-blue-100 text-blue-800';
      case 'operator':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Filtrar usuarios por empresa
  const filteredUsers = selectedCompany
    ? mockUsers.filter(user => 
        user.companies.some(company => company.companyId === selectedCompany)
      )
    : mockUsers;

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
        <p className="mt-2 text-gray-600">
          Gestiona los usuarios y sus roles en el sistema
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-80"
            />
          </div>

          {/* Filtro de Empresa */}
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white w-64"
            >
              <option value="">Todas las empresas</option>
              {mockCompanies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.businessName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Link 
          href="/dashboard/users/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Agregar Usuario</span>
        </Link>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empresa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
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
            {filteredUsers.map((user) => (
              <tr 
                key={user.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/dashboard/users/${user.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </div>
                      {user.isAdmin && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                          Admin
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {user.companies.map((companyUser) => (
                      <div key={companyUser.id} className="mb-1">
                        {companyUser.companyName}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.companies.map((companyUser) => (
                    <div key={companyUser.id} className="mb-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(
                          companyUser.role
                        )}`}
                      >
                        {companyUser.role}
                      </span>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Activo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(user.companies[0]?.createdAt || "").toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Mock data para empresas
const mockCompanies: Company[] = [
  {
    id: "c1",
    businessName: "Acueducto Municipal de Bogotá"
  },
  {
    id: "c2",
    businessName: "Energía Regional del Valle"
  },
  {
    id: "c3",
    businessName: "Gas Natural del Caribe"
  }
];

// Mock data users actualizado con nombres de empresas
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@verdi.com",
    firstName: "Admin",
    lastName: "Usuario",
    isAdmin: true,
    companies: [
      {
        id: "cu1",
        userId: "1",
        companyId: "c1",
        companyName: "Acueducto Municipal de Bogotá",
        role: "admin",
        createdAt: "2024-03-15T10:00:00Z",
        updatedAt: "2024-03-15T10:00:00Z"
      }
    ]
  },
  {
    id: "2",
    email: "gerente@empresa.com",
    firstName: "Juan",
    lastName: "Pérez",
    isAdmin: false,
    companies: [
      {
        id: "cu2",
        userId: "2",
        companyId: "c1",
        companyName: "Acueducto Municipal de Bogotá",
        role: "manager",
        createdAt: "2024-03-14T10:00:00Z",
        updatedAt: "2024-03-14T10:00:00Z"
      },
      {
        id: "cu4",
        userId: "2",
        companyId: "c2",
        companyName: "Energía Regional del Valle",
        role: "operator",
        createdAt: "2024-03-14T10:00:00Z",
        updatedAt: "2024-03-14T10:00:00Z"
      }
    ]
  },
  {
    id: "3",
    email: "operador@empresa.com",
    firstName: "María",
    lastName: "González",
    isAdmin: false,
    companies: [
      {
        id: "cu3",
        userId: "3",
        companyId: "c3",
        companyName: "Gas Natural del Caribe",
        role: "operator",
        createdAt: "2024-03-13T10:00:00Z",
        updatedAt: "2024-03-13T10:00:00Z"
      }
    ]
  }
];