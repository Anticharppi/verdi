"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MaterialFields } from "./form-fields/material-fields";
import { useRouter } from "next/navigation";

interface MaterialIntakeSummaryProps {
  mode: "create" | "edit";
  initialData?: any;
  onBack: () => void;
}

export function MaterialIntakeSummary({
  mode,
  initialData,
  onBack,
}: MaterialIntakeSummaryProps) {
  const router = useRouter();

  const handleSubmit = async () => {
    if (mode === "create") {
      // Aquí iría la lógica de creación
      router.push("/dashboard/materials-intake");
    } else {
      // Aquí iría la lógica de actualización
      router.push("/dashboard/materials-intake");
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Recepción</CardTitle>
          <CardDescription>
            Revisa los detalles antes de confirmar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Información General</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Proveedor</p>
                  <p className="text-sm font-medium">Juan Pérez</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ruta</p>
                  <p className="text-sm font-medium">Ruta Norte</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vehículo</p>
                  <p className="text-sm font-medium">ABC123 - Camión</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Semana</p>
                  <p className="text-sm font-medium">48</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tarifa Fija</p>
                  <p className="text-sm font-medium">$2,000</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sitio de Rechazo</p>
                  <p className="text-sm font-medium">Sitio Norte</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Ejemplo de material */}
              <MaterialFields
                control={null as any} // En el resumen no necesitamos control
                index={0}
                onRemove={() => {}}
                isRemovable={false}
                showCalculatedFields={true}
              />
            </div>

            <Card>
              <CardContent className="mt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">$150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tarifa Fija</span>
                    <span className="font-medium">$2,000</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-lg font-medium">$152,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Anterior
        </Button>
        <Button type="button" onClick={handleSubmit}>
          {mode === "create" ? "Crear Recibo" : "Actualizar Recibo"}
        </Button>
      </div>
    </div>
  );
}