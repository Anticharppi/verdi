"use client";

import { useState } from "react";
import { useCompany } from "@/contexts/CompanyContext";
import { Plus } from "lucide-react";
import Link from "next/link";
import { VehicleFilters } from "@/components/vehicles/filters/vehicle-filters";
import { VehiclesTable } from "@/components/vehicles/table/vehicles-table";
import { Vehicle } from "@/components/vehicles/types";

// Mock data para desarrollo
const mockVehicles: Vehicle[] = [
  {
    id: "1",
    type: "VOLQUETA",
    licensePlate: "ABC123",
    volumeCapacity: 10.5,
    weightCapacity: 5000,
    axesAmount: 2,
    registrationDate: "2024-01-15",
    entryOperationDate: "2024-01-20",
    brand: "Mercedes-Benz",
    provider: {
      id: "p1",
      names: "Juan Pérez",
      document: "CC 123456"
    },
    status: "ACTIVE"
  },
  {
    id: "2",
    type: "COMPACTADOR",
    licensePlate: "XYZ789",
    volumeCapacity: 15.0,
    weightCapacity: 7500,
    axesAmount: 3,
    registrationDate: "2024-02-01",
    entryOperationDate: "2024-02-10",
    brand: "Volvo",
    provider: {
      id: "p2",
      names: "María López",
      document: "CC 789012"
    },
    status: "ACTIVE"
  },
  {
    id: "3",
    type: "VEHICULO_TRACCION_HUMANA",
    licensePlate: "VTH001",
    volumeCapacity: 0.5,
    weightCapacity: 100,
    axesAmount: 2,
    registrationDate: "2024-01-05",
    entryOperationDate: "2024-01-10",
    brand: "",
    provider: {
      id: "p3",
      names: "Carlos Rodríguez",
      document: "CC 345678"
    },
    status: "INACTIVE"
  }
];

export default function VehiclesPage() {
  const { selectedCompany } = useCompany();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  if (!selectedCompany) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Por favor seleccione una empresa</p>
      </div>
    );
  }

  // Filtrar vehículos basado en los criterios de búsqueda
  const filteredVehicles = mockVehicles.filter(vehicle => {
    const matchesSearch = !searchTerm || 
      vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.provider.names.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter;
    const matchesType = typeFilter === "all" || vehicle.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Vehículos</h1>
        <p className="mt-2 text-gray-600">
          Gestiona los vehículos registrados en el sistema
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <VehicleFilters
          onSearch={setSearchTerm}
          onStatusChange={setStatusFilter}
          onTypeChange={setTypeFilter}
        />

        <Link
          href="/dashboard/vehicles/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Agregar Vehículo</span>
        </Link>
      </div>

      {/* Table */}
      <VehiclesTable vehicles={filteredVehicles} />
    </div>
  );
}