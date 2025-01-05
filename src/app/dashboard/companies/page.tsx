"use client";

import { Plus, Search, Building2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fakeCompanies } from "@/lib/data/fakeData";
import { useCompanies } from "@/hooks";
import { CompaniesTable } from "@/components/companies/CompaniesTable";

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useCompanies();

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Empresas</h1>
        <p className="mt-2 text-gray-600">
          Gestiona las empresas y sus configuraciones
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar empresa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-80"
            />
          </div>
        </div>

        <Link
          href="/dashboard/companies/new"
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
