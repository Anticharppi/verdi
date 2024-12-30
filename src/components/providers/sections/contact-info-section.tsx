"use client";

import { Phone } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { InputField } from "../ui/input-field";

interface ContactInfoProps {
  formData: {
    phone: string;
    email: string;
    address: string;
  };
  loading: boolean;
  onChange: (field: string, value: string) => void;
}

export function ContactInfoSection({
  formData,
  loading,
  onChange,
}: ContactInfoProps) {
  return (
    <FormSection
      icon={<Phone className="h-6 w-6 text-blue-600" />}
      title="Información de Contacto"
      description="Datos de contacto del proveedor"
      iconClassName="bg-blue-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <InputField
          label="Teléfono"
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          disabled={loading}
          placeholder="Ingrese el teléfono"
        />

        <InputField
          label="Correo Electrónico"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          disabled={loading}
          placeholder="correo@ejemplo.com"
        />

        <div className="col-span-2">
          <InputField
            label="Dirección"
            value={formData.address}
            onChange={(e) => onChange("address", e.target.value)}
            disabled={loading}
            placeholder="Ingrese la dirección completa"
          />
        </div>
      </div>
    </FormSection>
  );
}