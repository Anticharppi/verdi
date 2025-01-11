"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useCompanies } from "@/hooks";
import { CompaniesTable } from "@/components/companies/CompaniesTable";

export default function CompaniesPage() {
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useCompanies();

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Empresas</h1>
        <p className="mt-2 text-gray-600">
          Gestiona las empresas y sus configuraciones
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <Link
          href="/dashboard/companies/create"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar Empresa</span>
        </Link>
      </div>

      <CompaniesTable companies={companies} isLoading={isLoadingCompanies} />
    </div>
  );
}
