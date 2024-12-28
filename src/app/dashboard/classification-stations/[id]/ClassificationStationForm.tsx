"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BasicInfoForm } from "./_components/BasicInfoForm";
import { MaterialsForm } from "./_components/MaterialsForm";
import { WeighingMachinesForm } from "./_components/WeighingMachinesForm";

interface ClassificationStationFormProps {
  initialData?: any;
  isNew: boolean;
}

export default function ClassificationStationForm({ 
  initialData,
  isNew 
}: ClassificationStationFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState<string>(
    initialData?.city?.state?.code || ""
  );

  const form = useForm({
    defaultValues: initialData || {
      code: "",
      nuapCode: "",
      cityId: "",
      state: "",
      price: "",
      materials: [],
      weighingMachines: [{
        weightCapacity: "",
        installationDate: "",
        lastCalibrationDate: "",
        lastCalibrationCompanyName: ""
      }]
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular guardado
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/dashboard/classification-stations");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <BasicInfoForm
          control={form.control}
          selectedState={selectedState}
          onStateChange={setSelectedState}
          register={form.register}
          watch={form.watch}
          setValue={form.setValue}
        />

        <MaterialsForm
          control={form.control}
          register={form.register}
          watch={form.watch}
          setValue={form.setValue}
        />

        <WeighingMachinesForm
          control={form.control}
          register={form.register}
          watch={form.watch}
          setValue={form.setValue}
        />

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/classification-stations")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-all duration-200"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </span>
            ) : (
              isNew ? "Crear estación" : "Guardar cambios"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}