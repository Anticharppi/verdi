"use client";

import { useState, useMemo } from "react";
import { MapPinned } from "lucide-react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CompanyFormValues } from "@/schemas/company";
import { useStates } from "@/hooks";
import { StateSelect } from "./StateSelect";
import { stateColors } from "@/constants/state-colors";
import { SelectedCities } from "./SelectedCities";

export function CompanyOperatingCities() {
  const { control, watch, setValue } = useFormContext<CompanyFormValues>();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const { data: states, isLoading: isLoadingStates } = useStates();
  const selectedCities = watch("cities");

  const stateColorMap = useMemo(() => {
    const map = new Map();
    selectedStates.forEach((stateId, index) => {
      map.set(stateId, stateColors[index % stateColors.length]);
    });
    return map;
  }, [selectedStates]);

  const handleStateChange = (value: string) => {
    if (selectedStates.includes(value)) {
      setSelectedStates((prev) => prev.filter((state) => state !== value));
    } else {
      setSelectedStates((prev) => [...prev, value]);
    }
  };

  const handleCityAdd = (cityId: string) => {
    if (!cityId || selectedCities.includes(cityId)) return;
    setValue("cities", [...selectedCities, cityId], {
      shouldValidate: true,
    });
  };

  const handleCityRemove = (cityId: string) => {
    setValue(
      "cities",
      selectedCities.filter((id) => id !== cityId),
      { shouldValidate: true }
    );
  };

  if (isLoadingStates) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-60" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
          <MapPinned className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <CardTitle className="text-lg">Ciudades de Operación</CardTitle>
          <CardDescription className="text-sm">
            Selecciona los departamentos y ciudades donde opera la empresa
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <FormLabel className="text-sm font-medium">Departamentos</FormLabel>
            <div className="grid grid-cols-3 gap-2 mt-1 max-h-32 overflow-y-auto border rounded-lg p-2">
              {states?.map((state) => (
                <div key={state.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={state.id}
                    checked={selectedStates.includes(state.id)}
                    onChange={() => handleStateChange(state.id)}
                    className="h-3 w-3 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                  />
                  <label htmlFor={state.id} className="text-xs text-gray-600">
                    {state.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {selectedStates.map((stateId) => {
            const state = states?.find((s) => s.id === stateId);
            if (!state) return null;

            return (
              <StateSelect
                key={stateId}
                stateId={stateId}
                stateName={state.name}
                selectedCities={selectedCities}
                onCityAdd={handleCityAdd}
              />
            );
          })}
        </div>

        <FormField
          control={control}
          name="cities"
          render={() => (
            <FormItem>
              <FormLabel className="text-sm font-medium">
                Ciudades seleccionadas
              </FormLabel>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedCities.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No hay ciudades seleccionadas
                  </p>
                ) : (
                  selectedCities.map((cityId) => (
                    <SelectedCities
                      key={cityId}
                      cityId={cityId}
                      states={states || []}
                      selectedStates={selectedStates}
                      onRemove={handleCityRemove}
                      stateColorMap={stateColorMap}
                    />
                  ))
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
