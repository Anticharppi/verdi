import { MacroRouteForm } from "@/components/forms/macro-route-form";

export default function NewMacroRoutePage() {
  const initialData = {
    code: "",
    name: "",
    routes: [],
    nuecas: [],
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nueva Macro Ruta</h1>
        <p className="mt-2 text-gray-600">
          Crear una nueva macro ruta en el sistema
        </p>
      </div>

      <MacroRouteForm initialData={initialData} isNew={true} />
    </div>
  );
}