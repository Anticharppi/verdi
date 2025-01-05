"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useStates } from "@/hooks";

const mockCities = {
  ANT: [
    { code: "MED", name: "Medellín" },
    { code: "ENV", name: "Envigado" },
    { code: "BEL", name: "Bello" },
    { code: "ITA", name: "Itagüí" },
  ],
  ATL: [
    { code: "BAQ", name: "Barranquilla" },
    { code: "SOL", name: "Soledad" },
    { code: "MAL", name: "Malambo" },
  ],
  BOL: [
    { code: "CTG", name: "Cartagena" },
    { code: "MAG", name: "Magangué" },
    { code: "TUR", name: "Turbaco" },
  ],
};

export default function CreateServiceArea() {
  const router = useRouter();
  const { selectedCompany } = useCompany();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<
    { code: string; name: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const states = useStates();

  useEffect(() => {
    if (!selectedCompany) {
      router.push("/dashboard/service-areas");
    } else {
      setIsLoading(false);
    }
  }, [selectedCompany, router]);

  if (isLoading) {
    return null;
  }

  const availableCities =
    mockCities[selectedState as keyof typeof mockCities] || [];
  const remainingCities = availableCities.filter(
    (city) => !selectedCities.find((selected) => selected.code === city.code)
  );

  const handleAddCity = (cityCode: string) => {
    const city = availableCities.find((c) => c.code === cityCode);
    if (city) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (cityCode: string) => {
    setSelectedCities(selectedCities.filter((city) => city.code !== cityCode));
  };

  return (
    <div className="h-full">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/dashboard/service-areas")}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Nueva Área de Servicio
            </h1>
            <p className="mt-2 text-gray-600">
              Agrega un nuevo departamento y sus ciudades de operación para{" "}
              {selectedCompany.businessName}
            </p>
          </div>
        </div>
      </div>

      {/* Formulario principal */}
      <div className="max-w-2xl">
        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Selección de departamento */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                  Departamento
                </label>
                <Select
                  value={selectedState}
                  onValueChange={(value) => {
                    setSelectedState(value);
                    setSelectedCities([]);
                  }}
                >
                  <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                    <SelectValue placeholder="Selecciona un departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.data.map((state) => (
                      <SelectItem key={state.code} value={state.code}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Selección de ciudades */}
              {selectedState && (
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                    Ciudad
                  </label>
                  <Select
                    value=""
                    onValueChange={handleAddCity}
                    disabled={remainingCities.length === 0}
                  >
                    <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                      <SelectValue
                        placeholder={
                          remainingCities.length === 0
                            ? "No hay más ciudades disponibles"
                            : "Selecciona una ciudad"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {remainingCities.map((city) => (
                        <SelectItem key={city.code} value={city.code}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Lista de ciudades seleccionadas */}
              {selectedCities.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                    Ciudades seleccionadas
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedCities.map((city) => (
                      <Badge
                        key={city.code}
                        variant="secondary"
                        className="px-2 py-1 flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                      >
                        {city.name}
                        <button
                          onClick={() => handleRemoveCity(city.code)}
                          className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-4 pt-4 mt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard/service-areas")}
                className="text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                Cancelar
              </Button>
              <Button
                disabled={selectedCities.length === 0}
                onClick={() => router.push("/dashboard/service-areas")}
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Guardar área de servicio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
