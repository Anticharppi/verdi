"use client";

import { Plus, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VehicleHeaderProps {
  totalVehicles: number;
}

export function VehicleHeader({ totalVehicles }: VehicleHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-gray-500" />
          <h2 className="text-2xl font-semibold tracking-tight">Vehículos</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Gestiona los vehículos registrados en el sistema. Total: {totalVehicles}
        </p>
      </div>
      <Button asChild>
        <Link href="/dashboard/vehicles/new" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Vehículo
        </Link>
      </Button>
    </div>
  );
}