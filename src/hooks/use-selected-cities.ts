import { useState } from "react";

export function useSelectedCities(initialCities: string[] = []) {
  const [selectedCities, setSelectedCities] = useState<string[]>(initialCities);

  const addCity = (cityId: string) => {
    if (!cityId || selectedCities.includes(cityId)) return;
    setSelectedCities((prev) => [...prev, cityId]);
  };

  const removeCity = (cityId: string) => {
    setSelectedCities((prev) => prev.filter((id) => id !== cityId));
  };

  return {
    selectedCities,
    setSelectedCities,
    addCity,
    removeCity,
  };
}
