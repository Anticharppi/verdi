"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import ServiceAreaForm from "./ServiceAreaForm";

// Mock data para cargar un área existente
const mockServiceArea = {
  stateCode: "BOL",
  cities: [
    { code: "CTG", name: "Cartagena" },
    { code: "MAG", name: "Magangué" },
  ],
  createdAt: "2024-03-14T10:00:00Z",
  status: "active"
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceAreaPage({ params }: PageProps) {
  const router = useRouter();
  const { selectedCompany } = useCompany();
  
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const isNew = id === 'create';

  if (!selectedCompany) {
    router.push('/dashboard/service-areas');
    return null;
  }

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/dashboard/service-areas')}
          className="mb-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a áreas de servicio
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          {isNew ? 'Nueva Área de Servicio' : 'Editar Área de Servicio'}
        </h1>
        <p className="mt-2 text-gray-600">
          {isNew 
            ? 'Agrega una nueva área de servicio a la empresa' 
            : 'Modifica la información del área de servicio'}
        </p>
      </div>

      {/* Form */}
      <ServiceAreaForm 
        initialData={isNew ? undefined : mockServiceArea} 
        isNew={isNew}
      />
    </div>
  );
}