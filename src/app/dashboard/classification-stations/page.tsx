"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "../../../components/clasification-stations/Header";
import { SearchBar } from "../../../components/clasification-stations/SearchBar";
import { ClasificationStationsTable } from "../../../components/clasification-stations/ClasificationStationsTable";
import { useSelectedCompanyStore } from "@/store/companies";
import { useClasificationStations } from "@/hooks/clasification-stations";
import { ClasificationStationsTableSkeleton } from "@/components/clasification-stations/ClasificationStationsTableSkeleton";

export default function ClassificationStations() {
  const { selectedCompany } = useSelectedCompanyStore();
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useClasificationStations(selectedCompany?.id);

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  if (isLoading) {
    return <ClasificationStationsTableSkeleton />;
  }

  return (
    <div className="h-full">
      <Header companyName={selectedCompany?.businessName} />

      <div className="flex items-center justify-between mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Buscar por código, ciudad o material..."
        />

        <Link
          href="/dashboard/classification-stations/create"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar estación</span>
        </Link>
      </div>

      <ClasificationStationsTable stations={[]} />
    </div>
  );
}
