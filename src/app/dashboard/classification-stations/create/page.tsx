"use client";

import { ClasificationStationForm } from "../../../../components/clasification-stations/forms/ClasificationStationForm";

export default function CreateStationPage() {
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

      <ClasificationStationForm />
    </div>
  );
}
