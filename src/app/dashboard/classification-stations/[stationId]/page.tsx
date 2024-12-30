"use client";

import { StationForm } from "../_components/forms/station-form";
import { use } from "react";
import { mockStations } from "../page";

interface Props {
  params: Promise<{
    stationId: string;
  }>;
}

export default function EditStationPage({ params }: Props) {
  const { stationId } = use(params);
  const station = mockStations.find(
    (station) => station.id === stationId
  );

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Estación de Clasificación</h1>
        <p className="mt-2 text-gray-600">
          Modificar información de la estación de clasificación
        </p>
      </div>

      <StationForm initialData={station || {}} isNew={false} />
    </div>
  );
}