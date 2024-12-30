"use client";

import { Users } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { SelectField } from "../ui/select-field";
import { MockProvider } from "../types";

interface ProviderSectionProps {
  formData: {
    providerId: string;
  };
  loading: boolean;
  onChange: (field: string, value: string) => void;
}

// Mock data para proveedores
const mockProviders: MockProvider[] = [
  { id: "1", name: "Juan Pérez", document: "CC 123456" },
  { id: "2", name: "María López", document: "CC 789012" },
  { id: "3", name: "Carlos Rodríguez", document: "CC 345678" },
];

export function ProviderSection({
  formData,
  loading,
  onChange,
}: ProviderSectionProps) {
  return (
    <FormSection
      icon={<Users className="h-6 w-6 text-orange-600" />}
      title="Proveedor Asignado"
      description="Información del proveedor responsable"
      iconClassName="bg-orange-100"
    >
      <div className="grid grid-cols-1 gap-6">
        <SelectField
          label="Proveedor"
          value={formData.providerId}
          onChange={(e) => onChange("providerId", e.target.value)}
          disabled={loading}
          options={mockProviders.map(provider => ({
            value: provider.id,
            label: `${provider.name} - ${provider.document}`
          }))}
          placeholder="Seleccione un proveedor"
        />
      </div>
    </FormSection>
  );
}