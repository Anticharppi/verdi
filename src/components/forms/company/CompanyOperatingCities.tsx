"use client";

import { useState } from "react";
import { MapPinned, X } from "lucide-react";
import { useFormContext } from "react-hook-form";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CompanyFormValues } from "@/schemas/company";
import { useCities, useStates } from "@/hooks";

export function CompanyOperatingCities() {
  const { control, watch, setValue } = useFormContext<CompanyFormValues>();
  const [selectedState, setSelectedState] = useState<string>("");
  const { data: states, isLoading: isLoadingStates } = useStates();
  const { data: cities, isLoading: isLoadingCities } = useCities(selectedState);

  const selectedCities = watch("cities");

  const handleStateChange = (value: string) => {
    setSelectedState(value);
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

  const getDisplayCity = (cityId: string) => {
    if (!cities) return null;

    const city = cities.find((c) => c.id === cityId);
    if (!city) return null;

    const state = states?.find((s) => s.id === selectedState);
    return { city, stateName: state?.name };
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
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
          <MapPinned className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <CardTitle>Ciudades de Operación</CardTitle>
          <CardDescription>
            Selecciona las ciudades donde opera la empresa
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <FormLabel>Departamento</FormLabel>
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger>
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

          <div>
            <FormLabel>Ciudad</FormLabel>
            <Select
              disabled={!selectedState || isLoadingCities}
              onValueChange={handleCityAdd}
              value=""
            >
              <SelectTrigger>
                {isLoadingCities ? (
                  <Skeleton className="h-4 w-32" />
                ) : (
                  <SelectValue placeholder="Selecciona una ciudad" />
                )}
              </SelectTrigger>
              <SelectContent>
                {cities
                  ?.filter((city) => {
                    return !selectedCities.includes(city.id);
                  })
                  .map((city) => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <FormField
          control={control}
          name="cities"
          render={() => (
            <FormItem>
              <FormLabel>Ciudades seleccionadas</FormLabel>
              <div className="flex flex-wrap gap-2">
                {selectedCities.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No hay ciudades seleccionadas
                  </p>
                ) : (
                  selectedCities.map((cityId) => {
                    const cityData = getDisplayCity(cityId);
                    if (!cityData) return null;

                    return (
                      <Badge
                        key={cityId}
                        variant="secondary"
                        className="flex items-center gap-2 pl-3 pr-2 py-1.5 bg-purple-50 border border-purple-100"
                      >
                        <span className="text-purple-700">
                          {cityData.city.name}
                        </span>
                        <span className="text-purple-400">
                          ({cityData.stateName})
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCityRemove(cityId)}
                          className="text-purple-400 hover:text-purple-600 focus:outline-none ml-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </Badge>
                    );
                  })
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
