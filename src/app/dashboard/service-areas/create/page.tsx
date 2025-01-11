"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { City } from "@prisma/client";
import { useSelectedCompanyStore } from "@/store/companies";
import WithSelectedCompany from "@/components/WithSelectedCompany";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CreateServiceArea = () => {
  const router = useRouter();
  const { selectedCompany, cities, states } = useSelectedCompanyStore();
  const [selectedState, setSelectedState] = useState("");

  // Filtrar ciudades por estado seleccionado
  const filteredCities =
    cities?.filter((city) => city.stateId === selectedState) ?? [];

  const [formData, setFormData] = useState({
    code: "",
    companyCityId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar código
    const code = parseInt(formData.code);
    if (!code || code <= 0) {
      return;
    }

    if (!formData.companyCityId) {
      return;
    }

    try {
      // Aquí iría tu lógica de guardado con los nuevos campos
      router.push("/dashboard/service-areas");
    } catch (error) {
      console.error("Error al guardar el área de servicio:", error);
    }
  };

  return (
    <WithSelectedCompany>
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
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Campo de Código */}
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                      Código
                    </label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          code: e.target.value,
                        })
                      }
                      className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Ingresa el código"
                    />
                    {formData.code && parseInt(formData.code) <= 0 && (
                      <p className="text-sm text-red-500 mt-1">
                        El código debe ser mayor a 0
                      </p>
                    )}
                  </div>

                  {/* Selector de Estado */}
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                      Departamento
                    </label>
                    <Select
                      value={selectedState}
                      onValueChange={(value) => {
                        setSelectedState(value);
                        setFormData({
                          ...formData,
                          companyCityId: "",
                        });
                      }}
                    >
                      <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                        <SelectValue placeholder="Selecciona un departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {states?.map((state) => (
                          <SelectItem key={state.id} value={state.id}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Selector de Ciudad */}
                  {selectedState && (
                    <div>
                      <label className="text-sm font-medium text-gray-900 mb-1.5 block">
                        Ciudad
                      </label>
                      <Select
                        value={formData.companyCityId}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            companyCityId: value,
                          })
                        }
                      >
                        <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                          <SelectValue placeholder="Selecciona una ciudad" />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredCities.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-4 pt-4 mt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/dashboard/service-areas")}
                    className="text-gray-700 border-gray-300 hover:bg-gray-50"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      !formData.code ||
                      parseInt(formData.code) <= 0 ||
                      !formData.companyCityId
                    }
                    className="bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    Guardar área de servicio
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </WithSelectedCompany>
  );
};

export default CreateServiceArea;
