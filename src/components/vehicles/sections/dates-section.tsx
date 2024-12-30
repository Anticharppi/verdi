"use client";

import { Calendar } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { InputField } from "../ui/input-field";

interface DatesProps {
  formData: {
    registrationDate: string;
    entryOperationDate: string;
  };
  loading: boolean;
  onChange: (field: string, value: string) => void;
}

export function DatesSection({
  formData,
  loading,
  onChange,
}: DatesProps) {
  return (
    <FormSection
      icon={<Calendar className="h-6 w-6 text-purple-600" />}
      title="Fechas"
      description="Fechas importantes del vehículo"
      iconClassName="bg-purple-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Fecha de Registro"
          type="date"
          value={formData.registrationDate}
          onChange={(e) => onChange("registrationDate", e.target.value)}
          disabled={loading}
        />

        <InputField
          label="Fecha de Entrada en Operación"
          type="date"
          value={formData.entryOperationDate}
          onChange={(e) => onChange("entryOperationDate", e.target.value)}
          disabled={loading}
        />
      </div>
    </FormSection>
  );
}