import { useMemo, useState, useCallback, useEffect } from "react";
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
import { stateColors } from "@/constants/state-colors";
import { CompanyFormValues } from "@/schemas/company";
import { CitySelect } from "./CitySelect";
import { useStates } from "@/hooks";
import { useSelectedCities } from "@/hooks/use-selected-cities";
import { StatesList } from "./StateList";

export function CompanyOperatingCities() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext<CompanyFormValues>();
  const cities = watch("cities") || [];
  const { data: states, isLoading } = useStates();
  const [manuallySelectedStates, setManuallySelectedStates] = useState<
    string[]
  >(() => {
    if (!states?.length) return [];
    const initialSelectedStates = states
      .filter((state) => state.cities.some((cityId) => cities.includes(cityId)))
      .map((state) => state.id);

    return initialSelectedStates;
  });
  const [persistentStateColors] = useState(() => new Map());

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

  const stateColorMap = useMemo(() => {
    const availableColors = [...stateColors];

    selectedStateIds.forEach((stateId) => {
      if (!persistentStateColors.has(stateId)) {
        // Encontrar el primer color disponible que no esté en uso
        const unusedColor =
          availableColors.find(
            (color) =>
              ![...persistentStateColors.values()].some(
                (existingColor) =>
                  existingColor.bg === color.bg &&
                  existingColor.text === color.text
              )
          ) || availableColors[0]; // Fallback al primer color si todos están en uso

        persistentStateColors.set(stateId, unusedColor);
      }
    });

    return persistentStateColors;
  }, [selectedStateIds]);

  const handleStateChange = useCallback(
    (stateId: string) => {
      if (selectedStateIds.includes(stateId)) {
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
        const newManuallySelectedStates = [...states]
          .filter((state) =>
            [...manuallySelectedStates, stateId].includes(state.id)
          )
          .map((state) => state.id);

        setManuallySelectedStates(newManuallySelectedStates);
      }
    },
    [
      selectedStateIds,
      selectedCities,
      states,
      setValue,
      setSelectedCities,
      manuallySelectedStates,
    ]
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

  const validateStateCities = useCallback(() => {
    if (!states) return;

    const statesWithoutCities = selectedStateIds.filter((stateId) => {
      const state = states.find((s) => s.id === stateId);
      if (!state) return false;

      // Verifica si el estado tiene alguna ciudad seleccionada
      return !state.cities.some((cityId) => selectedCities.includes(cityId));
    });

    if (statesWithoutCities.length > 0) {
      const stateNames = statesWithoutCities
        .map((id) => states.find((s) => s.id === id)?.name)
        .filter(Boolean)
        .join(", ");

      setError("cities", {
        type: "custom",
        message: `Los siguientes departamentos no tienen ciudades seleccionadas: ${stateNames}`,
      });
    } else {
      clearErrors("cities");
    }
  }, [selectedStateIds, selectedCities, states, setError, clearErrors]);

  // Ejecutar la validación cuando cambien los estados o ciudades seleccionadas
  useEffect(() => {
    validateStateCities();
  }, [selectedStateIds, selectedCities, validateStateCities]);

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

      <CardContent className="space-y-6">
        <StatesList
          states={states || []}
          selectedStates={selectedStateIds}
          onStateChange={handleStateChange}
        />

        {/* Grid automático que se ajusta según el contenido */}
        {errors.cities && (
          <div className="text-sm text-red-600">{errors.cities.message}</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-auto">
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
        </div>
      </CardContent>
    </Card>
  );
}
