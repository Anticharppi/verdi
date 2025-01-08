import { useMemo, useState, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { MapPinned } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { stateColors } from "@/constants/state-colors";
import { CompanyFormValues } from "@/schemas/company";
import { CitySelect } from "./CitySelect";
import { SelectedCities } from "./SelectedCities";
import { useStates } from "@/hooks";
import { useSelectedCities } from "@/hooks/use-selected-cities";
import { StatesList } from "./StateList";

export function CompanyOperatingCities() {
  const { control, watch, setValue } = useFormContext<CompanyFormValues>();
  const cities = watch("cities") || [];
  const { data: states, isLoading } = useStates();
  const [manuallySelectedStates, setManuallySelectedStates] = useState<
    string[]
  >([]);

  const { selectedCities, setSelectedCities, addCity, removeCity } =
    useSelectedCities(cities);

  const selectedStateIds = useMemo(() => {
    if (!states?.length) return [];

    const statesWithCities = states
      .filter((state) =>
        state.cities.some((cityId) => selectedCities.includes(cityId))
      )
      .map((state) => state.id);

    return [...new Set([...statesWithCities, ...manuallySelectedStates])];
  }, [selectedCities, states, manuallySelectedStates]);

  // Primero agreguemos un console.log para depurar
  const stateColorMap = useMemo(() => {
    const map = new Map();
    console.log("selectedStateIds:", selectedStateIds);
    console.log("states:", states);

    selectedStateIds.forEach((stateId) => {
      const stateIndex =
        states?.findIndex((state) => state.id === stateId) ?? 0;
      const colorObject = stateColors[stateIndex % stateColors.length];
      map.set(stateId, colorObject);
      console.log("Setting color for state:", stateId, "color:", colorObject);
    });

    console.log("Final color map:", Array.from(map.entries()));
    return map;
  }, [selectedStateIds, states]);

  const handleStateChange = useCallback(
    (stateId: string) => {
      if (selectedStateIds.includes(stateId)) {
        // Remove the state and its cities
        const newCities = selectedCities.filter(
          (cityId) =>
            !states
              ?.find((state) => state.id === stateId)
              ?.cities.includes(cityId)
        );
        setSelectedCities(newCities);
        setValue("cities", newCities);
        setManuallySelectedStates((prev) =>
          prev.filter((id) => id !== stateId)
        );
      } else {
        setManuallySelectedStates((prev) => [...prev, stateId]);
      }
    },
    [selectedStateIds, selectedCities, states, setValue, setSelectedCities]
  );

  const handleCityAdd = useCallback(
    (cityId: string) => {
      addCity(cityId);
      setValue("cities", [...selectedCities, cityId], { shouldValidate: true });
    },
    [addCity, selectedCities, setValue]
  );

  const handleCityRemove = useCallback(
    (cityId: string) => {
      removeCity(cityId);
      setValue(
        "cities",
        selectedCities.filter((id) => id !== cityId),
        { shouldValidate: true }
      );
    },
    [removeCity, selectedCities, setValue]
  );

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex flex-row items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-60" />
            </div>
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
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            <MapPinned className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <CardTitle>Ciudades de Operación</CardTitle>
            <CardDescription>
              Selecciona los departamentos y ciudades donde opera la empresa
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <StatesList
          states={states || []}
          selectedStates={selectedStateIds}
          onStateChange={handleStateChange}
        />

        {selectedStateIds.map((stateId) => {
          const state = states?.find((s) => s.id === stateId);
          if (!state) return null;
          return (
            <CitySelect
              key={stateId}
              stateId={stateId}
              states={states}
              selectedCities={selectedCities}
              onCityAdd={handleCityAdd}
              onCityRemove={handleCityRemove}
              stateColorMap={stateColorMap}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
