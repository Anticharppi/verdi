"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const mockNuecas = [
  { id: "1", code: "NUECA-001", name: "NUECA Principal" },
  { id: "2", code: "NUECA-002", name: "NUECA Secundaria" },
];

interface ProviderFormData {
  id: string;
  names: string;
  lastNames: string;
  dniType: string;
  dni: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  type: string;
  workingDay: string;
  workingWeekDay: string;
  nuecaId: string;
  status: string;
}

interface ProviderFormProps {
  initialData: ProviderFormData;
}

export function ProviderForm({ initialData }: ProviderFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<ProviderFormData>(initialData);
  const isEditing = !!initialData.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    router.push("/dashboard/providers");
  };

  const handleInputChange = (field: keyof ProviderFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Botón Volver */}
      <Button
        variant="ghost"
        className="mb-6 text-gray-600 hover:text-gray-800"
        onClick={() => router.push("/dashboard/providers")}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Volver a Proveedores
      </Button>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información Personal
          </h3>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="names">Nombres</Label>
                <Input
                  id="names"
                  value={formData.names}
                  onChange={(e) => handleInputChange("names", e.target.value)}
                  placeholder="Nombres"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastNames">Apellidos</Label>
                <Input
                  id="lastNames"
                  value={formData.lastNames}
                  onChange={(e) => handleInputChange("lastNames", e.target.value)}
                  placeholder="Apellidos"
                  className="bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dniType">Tipo de Documento</Label>
                <Select
                  value={formData.dniType}
                  onValueChange={(value) => handleInputChange("dniType", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CC">Cédula de Ciudadanía</SelectItem>
                    <SelectItem value="CE">Cédula de Extranjería</SelectItem>
                    <SelectItem value="PA">Pasaporte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dni">Número de Documento</Label>
                <Input
                  id="dni"
                  value={formData.dni}
                  onChange={(e) => handleInputChange("dni", e.target.value)}
                  placeholder="Número de documento"
                  className="bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="bg-white"
                />
              </div>
              {isEditing && (
                <div className="space-y-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleInputChange("status", value)}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecciona estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Activo">Activo</SelectItem>
                      <SelectItem value="Inactivo">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información de Contacto
          </h3>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Teléfono"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Correo electrónico"
                  className="bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Dirección"
                className="bg-white"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información Laboral
          </h3>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Proveedor</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleInputChange("type", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RECICLADOR">Reciclador</SelectItem>
                    <SelectItem value="TRANSPORTADOR">Transportador</SelectItem>
                    <SelectItem value="OTRO">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workingDay">Jornada Laboral</Label>
                <Select
                  value={formData.workingDay}
                  onValueChange={(value) => handleInputChange("workingDay", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Selecciona jornada" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DIURNA">Diurna</SelectItem>
                    <SelectItem value="NOCTURNA">Nocturna</SelectItem>
                    <SelectItem value="MIXTA">Mixta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workingWeekDay">Días Laborales</Label>
                <Select
                  value={formData.workingWeekDay}
                  onValueChange={(value) => handleInputChange("workingWeekDay", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Selecciona días" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LUN_VIE">Lunes a Viernes</SelectItem>
                    <SelectItem value="LUN_SAB">Lunes a Sábado</SelectItem>
                    <SelectItem value="TODOS">Todos los días</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nueca">NUECA</Label>
                <Select
                  value={formData.nuecaId}
                  onValueChange={(value) => handleInputChange("nuecaId", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Selecciona NUECA" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockNuecas.map((nueca) => (
                      <SelectItem key={nueca.id} value={nueca.id}>
                        {nueca.code} - {nueca.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/providers")}
          >
            Cancelar
          </Button>
          <Button 
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            {isEditing ? "Guardar Cambios" : "Crear Proveedor"}
          </Button>
        </div>
      </form>
    </div>
  );
}