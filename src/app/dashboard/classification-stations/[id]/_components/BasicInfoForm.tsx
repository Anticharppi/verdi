"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

// Mock data para estados y ciudades
const mockStates = [
  { code: "ANT", name: "Antioquia" },
  { code: "BOL", name: "Bolívar" },
  { code: "ATL", name: "Atlántico" }
];

const mockCities = {
  "ANT": [
    { id: "MED", name: "Medellín" },
    { id: "ENV", name: "Envigado" }
  ],
  "BOL": [
    { id: "CTG", name: "Cartagena" },
    { id: "MAG", name: "Magangué" }
  ],
  "ATL": [
    { id: "BAQ", name: "Barranquilla" },
    { id: "SOL", name: "Soledad" }
  ]
};

interface BasicInfoFormProps {
  control: any;
  selectedState: string;
  onStateChange: (value: string) => void;
  register: any;
  watch: any;
  setValue: any;
}

export function BasicInfoForm({
  control,
  selectedState,
  onStateChange,
  register,
  watch,
  setValue
}: BasicInfoFormProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código NUECA
              </label>
              <Input 
                placeholder="Ej: NUECA-001" 
                {...register("code")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código NUAP
              </label>
              <Input 
                placeholder="Ej: NUAP-001" 
                {...register("nuapCode")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Departamento
              </label>
              <Select 
                value={selectedState} 
                onValueChange={(value) => {
                  onStateChange(value);
                  setValue("cityId", "");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un departamento" />
                </SelectTrigger>
                <SelectContent>
                  {mockStates.map((state) => (
                    <SelectItem key={state.code} value={state.code}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad
              </label>
              <Select 
                value={watch("cityId")}
                onValueChange={(value) => setValue("cityId", value)}
                disabled={!selectedState}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {selectedState && mockCities[selectedState as keyof typeof mockCities].map((city) => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Precio base
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <Input
                type="number"
                className="pl-7"
                placeholder="0"
                {...register("price")}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}