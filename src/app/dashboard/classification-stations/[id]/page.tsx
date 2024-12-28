"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import ClassificationStationForm from "./ClassificationStationForm";

// Mock data para estación existente
const mockStation = {
  code: "NUECA-001",
  nuap: {
    code: "NUAP-BOL-001"
  },
  city: {
    id: "CTG",
    name: "Cartagena",
    state: {
      code: "BOL",
      name: "Bolívar"
    }
  },
  price: 1500000,
  materials: [
    { id: "1", material: "CAR", name: "Cartón", price: 1000 },
    { id: "2", material: "PLA", name: "Plástico", price: 1500 }
  ],
  weighingMachines: [
    {
      weightCapacity: 1000,
      installationDate: "2024-01-15",
      lastCalibrationDate: "2024-03-01",
      lastCalibrationCompanyName: "Calibradores S.A.S"
    }
  ],
  status: "active",
  createdAt: "2024-01-01T10:00:00Z"
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ClassificationStationPage({ params }: PageProps) {
  const router = useRouter();
  const { selectedCompany } = useCompany();
  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState<any>(null);
  
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const isNew = id === 'create';

  useEffect(() => {
    if (!selectedCompany) {
      router.push('/dashboard/classification-stations');
    } else {
      if (!isNew) {
        // Aquí cargaríamos los datos de la estación existente
        setInitialData(mockStation);
      }
      setIsLoading(false);
    }
  }, [selectedCompany, router, isNew]);

  if (isLoading || !selectedCompany) {
    return null;
  }

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/dashboard/classification-stations')}
          className="mb-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a estaciones de clasificación
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          {isNew ? 'Nueva Estación de Clasificación' : 'Editar Estación de Clasificación'}
        </h1>
        <p className="mt-2 text-gray-600">
          {isNew 
            ? 'Agrega una nueva estación de clasificación NUECA a la empresa' 
            : `Modifica la información de la estación ${initialData?.code}`}
        </p>
      </div>

      {/* Form */}
      <ClassificationStationForm 
        initialData={isNew ? undefined : initialData} 
        isNew={isNew}
      />
    </div>
  );
}