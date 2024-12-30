"use client";

import { Scale } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { InputField } from "../ui/input-field";

interface TechnicalInfoProps {
  formData: {
    volumeCapacity: number;
    weightCapacity: number;
    axesAmount: number;
  };
  loading: boolean;
  onChange: (field: string, value: string) => void;
}

export function TechnicalInfoSection({
  formData,
  loading,
  onChange,
}: TechnicalInfoProps) {
  return (
    <FormSection
      icon={<Scale className="h-6 w-6 text-blue-600" />}
      title="Información Técnica"
      description="Especificaciones técnicas del vehículo"
      iconClassName="bg-blue-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Capacidad de Volumen (m³)"
          type="number"
          value={formData.volumeCapacity.toString()}
          onChange={(e) => onChange("volumeCapacity", e.target.value)}
          disabled={loading}
          placeholder="0.00"
          min="0"
          step="0.01"
        />

        <InputField
          label="Capacidad de Peso (kg)"
          type="number"
          value={formData.weightCapacity.toString()}
          onChange={(e) => onChange("weightCapacity", e.target.value)}
          disabled={loading}
          placeholder="0.00"
          min="0"
          step="0.01"
        />

        <InputField
          label="Número de Ejes"
          type="number"
          value={formData.axesAmount.toString()}
          onChange={(e) => onChange("axesAmount", e.target.value)}
          disabled={loading}
          placeholder="0"
          min="0"
        />
      </div>
    </FormSection>
  );
}