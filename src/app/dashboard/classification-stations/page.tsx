"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header } from "../../../components/clasification-stations/Header";
import { SearchBar } from "../../../components/clasification-stations/SearchBar";
import { StationTable } from "../../../components/clasification-stations/StationTable";
import type { Station } from "../../../components/clasification-stations/types";
import { useSelectedCompanyStore } from "@/store/companies";

const mockStations: Station[] = [
  {
    id: "1",
    code: "NUECA-001",
    price: 1500000,
    city: {
      id: "CTG",
      name: "Cartagena",
      state: {
        code: "BOL",
        name: "Bolívar",
      },
    },
    nuap: {
      id: "NUAP-001",
      code: "NUAP-BOL-001",
    },
    materials: [
      { id: "1", name: "Cartón", code: "CAR", price: 1000 },
      { id: "2", name: "Plástico", code: "PLA", price: 1500 },
    ],
    weighingMachines: [
      {
        id: "1",
        weightCapacity: 1000,
        installationDate: "2024-01-15",
        lastCalibrationDate: "2024-03-01",
      },
    ],
    status: "active",
    createdAt: "2024-01-01T10:00:00Z",
  },
  {
    id: "2",
    code: "NUECA-002",
    price: 2000000,
    city: {
      id: "MED",
      name: "Medellín",
      state: {
        code: "ANT",
        name: "Antioquia",
      },
    },
    nuap: {
      id: "NUAP-002",
      code: "NUAP-ANT-001",
    },
    materials: [
      { id: "1", name: "Cartón", code: "CAR", price: 1000 },
      { id: "2", name: "Plástico", code: "PLA", price: 1500 },
      { id: "3", name: "Vidrio", code: "VID", price: 800 },
      { id: "4", name: "Metal", code: "MET", price: 2000 },
    ],
    weighingMachines: [
      {
        id: "2",
        weightCapacity: 2000,
        installationDate: "2024-02-15",
        lastCalibrationDate: "2024-03-15",
      },
    ],
    status: "active",
    createdAt: "2024-02-01T10:00:00Z",
  },
];

export default function ClassificationStations() {
  const { selectedCompany } = useSelectedCompanyStore();
  const [searchQuery, setSearchQuery] = useState("");

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  const filteredStations = mockStations.filter(
    (station) =>
      station.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.materials.some((material) =>
        material.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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

      <StationTable stations={filteredStations} />
    </div>
  );
}
