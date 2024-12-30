import { MacroRouteForm } from "@/components/forms/macro-route-form";
import { MOCK_MACRO_ROUTES } from "@/lib/data/mock-data";

interface Props {
  params: {
    macroRouteId: string;
  };
}

export default function EditMacroRoutePage({ params }: Props) {
  const macroRoute = MOCK_MACRO_ROUTES.find(
    (route) => route.id === params.macroRouteId
  );

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Macro Ruta</h1>
        <p className="mt-2 text-gray-600">
          Modificar información de la macro ruta
        </p>
      </div>

      <MacroRouteForm initialData={macroRoute || {}} isNew={false} />
    </div>
  );
}