"use client";

import { UserCircle2 } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { InputField } from "../ui/input-field";
import { SelectField } from "../ui/select-field";

interface PersonalInfoProps {
  formData: {
    names: string;
    lastNames: string;
    dniType: string;
    dni: string;
    birthDate: string;
    status?: string;
  };
  loading: boolean;
  isEditing: boolean;
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoSection({
  formData,
  loading,
  isEditing,
  onChange,
}: PersonalInfoProps) {
  return (
    <FormSection
      icon={<UserCircle2 className="h-6 w-6 text-emerald-600" />}
      title="Información Personal"
      description="Datos básicos del proveedor"
      iconClassName="bg-emerald-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Nombres"
          value={formData.names}
          onChange={(e) => onChange("names", e.target.value)}
          disabled={loading}
          placeholder="Ingrese los nombres"
        />

        <InputField
          label="Apellidos"
          value={formData.lastNames}
          onChange={(e) => onChange("lastNames", e.target.value)}
          disabled={loading}
          placeholder="Ingrese los apellidos"
        />

        <SelectField
          label="Tipo de Documento"
          value={formData.dniType}
          onChange={(e) => onChange("dniType", e.target.value)}
          disabled={loading}
          options={[
            { value: "CC", label: "Cédula de Ciudadanía" },
            { value: "CE", label: "Cédula de Extranjería" },
            { value: "PA", label: "Pasaporte" },
          ]}
          placeholder="Seleccione tipo"
        />

        <InputField
          label="Número de Documento"
          value={formData.dni}
          onChange={(e) => onChange("dni", e.target.value)}
          disabled={loading}
          placeholder="Ingrese el número de documento"
        />

        <InputField
          label="Fecha de Nacimiento"
          type="date"
          value={formData.birthDate}
          onChange={(e) => onChange("birthDate", e.target.value)}
          disabled={loading}
        />

        {isEditing && (
          <SelectField
            label="Estado"
            value={formData.status}
            onChange={(e) => onChange("status", e.target.value)}
            disabled={loading}
            options={[
              { value: "Activo", label: "Activo" },
              { value: "Inactivo", label: "Inactivo" },
            ]}
          />
        )}
      </div>
    </FormSection>
  );
}