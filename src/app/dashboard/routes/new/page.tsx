import { RouteForm } from "@/components/forms/route-form";

export default function NewRoutePage() {
  const initialData = {
    code: "",
    name: "",
    type: "",
    entryOperationDate: "",
    startAddress: "",
    startTime: "",
    endAddress: "",
    endTime: "",
    distanceOnPavedRoute: 0,
    distanceOnNotPavedRoute: 0,
    weeklyFrequency: 0,
    frequency: "",
    endsOnTransferStation: false,
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nueva Ruta</h1>
        <p className="mt-2 text-gray-600">
          Crear una nueva ruta en el sistema
        </p>
      </div>

      <RouteForm initialData={initialData} isNew={true} />
    </div>
  );
}