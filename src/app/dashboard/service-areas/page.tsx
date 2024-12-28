"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header } from "./_components/Header";
import { SearchBar } from "./_components/SearchBar";
import { ServiceAreaTable } from "./_components/ServiceAreaTable";

// Mock data para áreas de servicio
const mockServiceAreas = [
  {
    id: "1",
    stateCode: "ANT",
    stateName: "Antioquia",
    cities: [
      { code: "MED", name: "Medellín" },
      { code: "ENV", name: "Envigado" },
      { code: "BEL", name: "Bello" }
    ],
    createdAt: "2024-03-15T10:00:00Z",
    status: "active"
  },
  {
    id: "2",
    stateCode: "ATL",
    stateName: "Atlántico",
    cities: [
      { code: "BAQ", name: "Barranquilla" },
      { code: "SOL", name: "Soledad" }
    ],
    createdAt: "2024-03-14T10:00:00Z",
    status: "active"
  },
  {
    id: "3",
    stateCode: "BOL",
    stateName: "Bolívar",
    cities: [
      { code: "CTG", name: "Cartagena" },
      { code: "MAG", name: "Magangué" }
    ],
    createdAt: "2024-03-13T10:00:00Z",
    status: "active"
  }
];

export default function ServiceAreas() {
  const { selectedCompany } = useCompany();
  const [searchQuery, setSearchQuery] = useState("");

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  const filteredAreas = mockServiceAreas.filter(area => 
    area.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.cities.some(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="h-full">
      <Header companyName={selectedCompany.name || selectedCompany.businessName} />

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <Link 
          href="/dashboard/service-areas/create"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar área de servicio</span>
        </Link>
      </div>

      <ServiceAreaTable areas={filteredAreas} />
    </div>
  );
}