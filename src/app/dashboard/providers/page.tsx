"use client";

import { ProvidersTable } from "@/components/providers/providers-table";
import { Header } from "./_components/Header";
import { SearchBar } from "./_components/SearchBar";
import { useCompany } from "@/contexts/CompanyContext";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProvidersPage() {
  const { selectedCompany } = useCompany();
  const [searchQuery, setSearchQuery] = useState("");

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Header companyName={selectedCompany.name || selectedCompany.businessName} />

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Buscar por nombre, documento o tipo..."
        />

        <Link
          href="/dashboard/providers/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar proveedor</span>
        </Link>
      </div>

      <ProvidersTable searchQuery={searchQuery} />
    </div>
  );
}