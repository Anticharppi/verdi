"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VehicleStatusFilterProps {
  onChange: (value: string) => void;
}

export function VehicleStatusFilter({ onChange }: VehicleStatusFilterProps) {
  return (
    <Select onValueChange={onChange} defaultValue="all">
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Estado" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos</SelectItem>
        <SelectItem value="ACTIVE">Activos</SelectItem>
        <SelectItem value="INACTIVE">Inactivos</SelectItem>
      </SelectContent>
    </Select>
  );
}