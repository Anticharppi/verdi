"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { BasicInfoSection } from "./sections/basic-info-section";
import { TechnicalInfoSection } from "./sections/technical-info-section";
import { DatesSection } from "./sections/dates-section";
import { ProviderSection } from "./sections/provider-section";
import { FormHeader } from "./ui/form-header";
import { Button } from "@/components/ui/button";
import { VehicleFormProps } from "./types";
import { useVehicleForm } from "./hooks/useVehicleForm";
import { VehicleDeleteAlert } from "./table/vehicle-delete-alert";

export function VehicleForm({ initialData }: VehicleFormProps) {
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const {
    formData,
    errors,
    loading,
    isEditing,
    handleChange,
    onSubmit,
    handleDelete,
  } = useVehicleForm(initialData);

  return (
    <div className="max-w-4xl mx-auto">
      <FormHeader onBack={() => router.push("/dashboard/vehicles")} />

      <form onSubmit={onSubmit} className="space-y-6">
        <BasicInfoSection
          formData={formData}
          loading={loading}
          onChange={handleChange}
        />

        <TechnicalInfoSection
          formData={formData}
          loading={loading}
          onChange={handleChange}
        />

        <DatesSection
          formData={formData}
          loading={loading}
          onChange={handleChange}
        />

        <ProviderSection
          formData={formData}
          loading={loading}
          onChange={handleChange}
        />

        <div className="flex items-center justify-end gap-4">
          {isEditing && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowDeleteAlert(true)}
              disabled={loading}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Eliminar Vehículo
            </Button>
          )}
          <Button
            type="submit"
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            {loading
              ? "Guardando..."
              : isEditing
              ? "Guardar Cambios"
              : "Crear Vehículo"}
          </Button>
        </div>
      </form>

      <VehicleDeleteAlert
        open={showDeleteAlert}
        loading={loading}
        onClose={() => setShowDeleteAlert(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
