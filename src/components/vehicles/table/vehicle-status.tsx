"use client";

interface VehicleStatusProps {
  status: "ACTIVE" | "INACTIVE";
}

export function VehicleStatus({ status }: VehicleStatusProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${
          status === "ACTIVE"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }
      `}
    >
      {status === "ACTIVE" ? "Activo" : "Inactivo"}
    </span>
  );
}