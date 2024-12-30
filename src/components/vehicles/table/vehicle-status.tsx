"use client";

import { Badge } from "@/components/ui/badge";

interface VehicleStatusProps {
  status: "ACTIVE" | "INACTIVE";
}

export function VehicleStatus({ status }: VehicleStatusProps) {
  return (
    <div className="flex justify-start">
      {status === "ACTIVE" ? (
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
          Activo
        </Badge>
      ) : (
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 hover:bg-red-50">
          Inactivo
        </Badge>
      )}
    </div>
  );
}