"use client";

import { Search } from "lucide-react";
import { VehicleStatusFilter } from "./vehicle-status-filter";
import { VehicleTypeFilter } from "./vehicle-type-filter";

interface VehicleFiltersProps {
  onSearch: (value: string) => void;
  onStatusChange: (status: string) => void;
  onTypeChange: (type: string) => void;
}

export function VehicleFilters({
  onSearch,
  onStatusChange,
  onTypeChange,
}: VehicleFiltersProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar por placa o proveedor..."
          onChange={(e) => onSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-80"
        />
      </div>
      <VehicleStatusFilter onChange={onStatusChange} />
      <VehicleTypeFilter onChange={onTypeChange} />
    </div>
  );
}