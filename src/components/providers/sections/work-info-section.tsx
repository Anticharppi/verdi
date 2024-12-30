"use client";

import { Briefcase } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { SelectField } from "../ui/select-field";

interface WorkInfoProps {
  formData: {
    type: string;
    workingDay: string;
    workingWeekDay: string;
    nuecaId: string;
  };
  loading: boolean;
  mockNuecas: Array<{ id: string; code: string; name: string }>;
  onChange: (field: string, value: string) => void;
}

export function WorkInfoSection({
  formData,
  loading,
  mockNuecas,
  onChange,
}: WorkInfoProps) {
  return (
    <FormSection
      icon={<Briefcase className="h-6 w-6 text-purple-600" />}
      title="Información Laboral"
      description="Configuración laboral del proveedor"
      iconClassName="bg-purple-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <SelectField
          label="Tipo de Proveedor"
          value={formData.type}
          onChange={(e) => onChange("type", e.target.value)}
          disabled={loading}
          options={[
            { value: "RECICLADOR", label: "Reciclador" },
            { value: "TRANSPORTADOR", label: "Transportador" },
            { value: "OTRO", label: "Otro" },
          ]}
          placeholder="Seleccione tipo"
        />

        <SelectField
          label="Jornada Laboral"
          value={formData.workingDay}
          onChange={(e) => onChange("workingDay", e.target.value)}
          disabled={loading}
          options={[
            { value: "DIURNA", label: "Diurna" },
            { value: "NOCTURNA", label: "Nocturna" },
            { value: "MIXTA", label: "Mixta" },
          ]}
          placeholder="Seleccione jornada"
        />

        <SelectField
          label="Días Laborales"
          value={formData.workingWeekDay}
          onChange={(e) => onChange("workingWeekDay", e.target.value)}
          disabled={loading}
          options={[
            { value: "LUN_VIE", label: "Lunes a Viernes" },
            { value: "LUN_SAB", label: "Lunes a Sábado" },
            { value: "TODOS", label: "Todos los días" },
          ]}
          placeholder="Seleccione días"
        />

        <SelectField
          label="NUECA"
          value={formData.nuecaId}
          onChange={(e) => onChange("nuecaId", e.target.value)}
          disabled={loading}
          options={mockNuecas.map((nueca) => ({
            value: nueca.id,
            label: `${nueca.code} - ${nueca.name}`,
          }))}
          placeholder="Seleccione NUECA"
        />
      </div>
    </FormSection>
  );
}