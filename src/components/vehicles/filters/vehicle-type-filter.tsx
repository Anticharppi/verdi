"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VehicleTypeFilterProps {
  onChange: (value: string) => void;
}

export function VehicleTypeFilter({ onChange }: VehicleTypeFilterProps) {
  return (
    <Select onValueChange={onChange} defaultValue="all">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Tipo de vehículo" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los tipos</SelectItem>
        <SelectItem value="VOLQUETA">Volqueta</SelectItem>
        <SelectItem value="COMPACTADOR">Compactador</SelectItem>
        <SelectItem value="TRACTO_CAMION">Tracto Camión</SelectItem>
        <SelectItem value="CAMIONETA">Camioneta</SelectItem>
        <SelectItem value="VEHICULO_TRACCION_HUMANA">Vehículo de Tracción Humana</SelectItem>
        <SelectItem value="OTRO">Otro</SelectItem>
      </SelectContent>
    </Select>
  );
}