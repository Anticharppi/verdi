import { RouteForm } from "@/components/forms/route-form";
import { MOCK_ROUTES } from "@/lib/data/routes-mock";

interface Props {
  params: {
    routeId: string;
  };
}

export default function EditRoutePage({ params }: Props) {
  const route = MOCK_ROUTES.find(
    (route) => route.id === params.routeId
  );

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Ruta</h1>
        <p className="mt-2 text-gray-600">
          Modificar información de la ruta
        </p>
      </div>

      <RouteForm initialData={route || {}} isNew={false} />
    </div>
  );
}