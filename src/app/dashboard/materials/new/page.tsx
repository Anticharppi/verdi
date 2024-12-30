import { MaterialForm } from "@/components/forms/material-form";

export default function NewMaterialPage() {
  const initialData = {
    code: "",
    name: "",
    price: 0,
    baseMaterialId: "",
    nuecaId: "",
  };

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nuevo Material</h1>
        <p className="mt-2 text-gray-600">
          Crear un nuevo material en el sistema
        </p>
      </div>

      <MaterialForm initialData={initialData} isNew={true} />
    </div>
  );
}