"use client";

import { Truck, Trash2, Car, ChevronsDown, Bike } from "lucide-react";
import { VehicleType } from "../types";

interface VehicleTypeIconProps {
  type: VehicleType;
}

export function VehicleTypeIcon({ type }: VehicleTypeIconProps) {
  const Icon = getIconByType(type);
  const bgColor = getBackgroundColorByType(type);
  const iconColor = getIconColorByType(type);

  return (
    <div className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center`}>
      <Icon className={`h-6 w-6 ${iconColor}`} />
    </div>
  );
}

function getIconByType(type: VehicleType) {
  switch (type) {
    case "VOLQUETA":
      return Truck;
    case "COMPACTADOR":
      return Trash2;
    case "TRACTO_CAMION":
      return ChevronsDown;
    case "CAMIONETA":
      return Car;
    case "VEHICULO_TRACCION_HUMANA":
      return Bike;
    default:
      return Car;
  }
}

function getBackgroundColorByType(type: VehicleType) {
  switch (type) {
    case "VOLQUETA":
      return "bg-blue-100";
    case "COMPACTADOR":
      return "bg-green-100";
    case "TRACTO_CAMION":
      return "bg-purple-100";
    case "CAMIONETA":
      return "bg-yellow-100";
    case "VEHICULO_TRACCION_HUMANA":
      return "bg-orange-100";
    default:
      return "bg-gray-100";
  }
}

function getIconColorByType(type: VehicleType) {
  switch (type) {
    case "VOLQUETA":
      return "text-blue-600";
    case "COMPACTADOR":
      return "text-green-600";
    case "TRACTO_CAMION":
      return "text-purple-600";
    case "CAMIONETA":
      return "text-yellow-600";
    case "VEHICULO_TRACCION_HUMANA":
      return "text-orange-600";
    default:
      return "text-gray-600";
  }
}