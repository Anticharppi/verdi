"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TabPanelProps } from "../types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

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

export function BasicInfoPanel({ control, register, watch, setValue, errors }: TabPanelProps) {
  const selectedState = watch("state");

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código NUECA</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: NUECA-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="nuapCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código NUAP</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: NUAP-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departamento</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                      setValue("cityId", "");
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un departamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {mockStates.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="cityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ciudad</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={!selectedState}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una ciudad" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedState &&
                        mockCities[selectedState as keyof typeof mockCities].map((city) => (
                          <SelectItem key={city.id} value={city.id}>
                            {city.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio base</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <Input
                      type="number"
                      className="pl-7"
                      placeholder="0"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}