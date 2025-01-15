"use client";

import { Truck } from "lucide-react";
import { FormSection } from "../ui/form-section";
import { InputField } from "../ui/input-field";
import { SelectField } from "../ui/select-field";
import { VehicleType } from "../types";

interface BasicInfoProps {
  formData: {
    type: VehicleType;
    licensePlate: string;
    brand: string;
  };
  loading: boolean;
  onChange: (field: string, value: string) => void;
}

const vehicleTypes = [
  { value: "VOLQUETA", label: "Volqueta" },
  { value: "COMPACTADOR", label: "Compactador" },
  { value: "TRACTO_CAMION", label: "Tracto Camión" },
  { value: "CAMIONETA", label: "Camioneta" },
  { value: "VEHICULO_TRACCION_HUMANA", label: "Vehículo de Tracción Humana" },
  { value: "OTRO", label: "Otro" },
];

export function BasicInfoSection({
  formData,
  loading,
  onChange,
}: BasicInfoProps) {
  return (
    <FormSection
      icon={<Truck className="h-6 w-6 text-emerald-600" />}
      title="Información Básica"
      description="Datos principales del vehículo"
      iconClassName="bg-emerald-100"
    >
      <div className="grid grid-cols-2 gap-6">
        <SelectField
          label="Tipo de Vehículo"
          value={formData.type}
          onChange={(e) => onChange("type", e.target.value)}
          disabled={loading}
          options={vehicleTypes}
          placeholder="Seleccione tipo de vehículo"
        />

        <InputField
          label="Placa"
          value={formData.licensePlate}
          onChange={(e) => onChange("licensePlate", e.target.value)}
          disabled={loading}
          placeholder="Ingrese la placa"
        />

        <InputField
          label="Marca"
          value={formData.brand}
          onChange={(e) => onChange("brand", e.target.value)}
          disabled={loading}
          placeholder="Ingrese la marca"
        />
      </div>
    </FormSection>
  );
}
