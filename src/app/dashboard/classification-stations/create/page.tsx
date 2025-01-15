"use client";

import { StationForm } from "../../../../components/clasification-stations/forms/station-form";

export default function CreateStationPage() {
  const initialData = {
    code: "",
    price: 0,
    materials: [],
    cityId: "",
    nuapId: "",
  };

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Nueva Estación de Clasificación
        </h1>
        <p className="mt-2 text-gray-600">
          Crear una nueva estación de clasificación (NUECA) en el sistema
        </p>
      </div>

      <StationForm initialData={initialData} isNew={true} />
    </div>
  );
}
